var BSTUtils = {
    inputNumber : function () {
        var num = prompt("Enter value", 45);
        //alert(num == null);
        // if (num == null)return BSTUtils.inputNumber();
        // else return num;

        return num;
    },

    inputNumber : function(str) {
        var num = prompt("Enter value",43);
        //if(num==null)return BSTUtils.inputNumber(str);
        //else return num;
        return num;
    },

    clearCanvas : function() {
        canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height);
    },

    redrawImage : function() {
        //console.log(currentAlg.commands);
        currentAlg.animationManager.StartNewAnimation(currentAlg.commands);
        currentAlg.animationManager.skipForward();
        currentAlg.animationManager.clearHistory();
    },

    getQuestionID : function(){

        var radios = document.getElementsByName("radio"+Scheme.getSchemeVal().toString());
        for(var i=0;i<radios.length;i++){
            if(radios[i].checked)
                return radios[i].value;
        }
    },

    getAnswerID : function(){
        //alert('answer'+BSTUtils.getQuestionID());
        return 'answer'+BSTUtils.getQuestionID();
    },

    getCorrectAnswerID : function(){
        //alert('answer'+BSTUtils.getQuestionID());
        return 'correct_answer'+BSTUtils.getQuestionID();
    },

    getCorrectDS : function(initialDS, correct_answer){
        //var tempDS = jQuery.extend(true, {}, initialDS);
        var tempDS = initialDS;
        var operations = correct_answer.split(",").slice(0,-1);

        for(var op = 0; op < operations.length; op++) {
            BSTUtils.applyOperation(tempDS, operations[op]);
        }


        return tempDS;

    },

    isEqual : function(a,b) {
        if(b != null) console.log("visiting b : " +b.data);
        else console.log("visiting b : null");
        if(b != null  && b.data == 47) {
            //console.log("b.left : " + b.left.data);
            console.log("b.right : " + b.right.data);
        }

        // to compare two trees
        if(a == null && b == null) {
            console.log(" data match : " + a);
            return true;
        }
        else if(a == null) {
            console.log("a==null :returning false in base condition" + a + ":" + b.data);
            return false;
        }
        else if(b == null) {
            console.log("b==null : returning false in base condition" + a.data + ":" + b);
            return false;
        }

        if(a.data != b.data) {
            console.log("False : data not match : " + a.data + " != " + b.data);
            return false;
        }

        console.log(" data match : " + a.data);

        return BSTUtils.isEqual(a.left, b.left) && BSTUtils.isEqual(a.right, b.right);
    },

    isBalanced : function(tree) {
        BSTUtils.updateHeights(tree);

        if(tree == null) return true;

        if(tree.left == null && tree.right == null) return true;
        else if(tree.left == null && tree.right.height > 1) {
            alert("not balanced at " + tree.data);
            return false;
        }
        else if(tree.right == null && tree.left.height > 1) {
            alert("not balanced at " + tree.data);
            return false;
        }

        if(tree.left != null && tree.right != null && Math.abs(tree.left.height - tree.right.height) > 1) {
            alert("not balanced at " + tree.data);
            return false;
        }

        return BSTUtils.isBalanced(tree.left) && BSTUtils.isBalanced(tree.right);

    },

    isEqual_Arrays : function(a, b) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length != b.length) return false;


        for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    },


    cloneTree : function(root) {
        var new_root = new BSTNode(root.data, 0,0,0);
        new_root.height = root.height;
        var left = null, right = null;
        if(root.left != null) left = BSTUtils.cloneTree(root.left);
        if(root.right != null) right = BSTUtils.cloneTree(root.right);

        new_root.left = left;
        if(new_root.left != null) new_root.left.parent = new_root;

        new_root.right = right;
        if(new_root.right != null) new_root.right.parent = new_root;

        return new_root;
    },

    inorderArray : function(root, inorder) {
        if(root == null) return;

        BSTUtils.inorderArray(root.left, inorder);
        inorder.push(root.data);
        BSTUtils.inorderArray(root.right, inorder);

    },

    preorderArray : function(root, preorder) {
        if(root == null) return;

        preorder.push(root.data);
        BSTUtils.preorderArray(root.left, preorder);
        BSTUtils.preorderArray(root.right, preorder);

    },

    postorderArray : function(root, postorder) {
        if(root == null) return;

        BSTUtils.postorderArray(root.left, postorder);
        BSTUtils.postorderArray(root.right, postorder);
        postorder.push(root.data);

    },

    updateHeights : function(root) {
        if(root == null) return;

        BSTUtils.updateHeights(root.left);
        BSTUtils.updateHeights(root.right);

        var h = 1;
        if(root.left != null && root.left.height + 1 > h) h = root.left.height + 1;
        if(root.right != null && root.right.height + 1 > h) h = root.right.height + 1;

        root.height = h;

    },

    applyOperation : function(ds, operation){
        if(BSTUtils.stringStartsWith(operation.toUpperCase(), "INSERT")) {
            var args = operation.split(":");

        }

    },

    stringStartsWith : function(string, prefix) {
        return string.slice(0, prefix.length) == prefix;
    },




    validate : function(obj){
        return obj!=null && obj!=undefined;
    },
};