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

    validate : function(obj){
        return obj!=null && obj!=undefined;
    },
};