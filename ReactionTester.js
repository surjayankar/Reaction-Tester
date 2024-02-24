var start;
            function getRandomColor(){
                var letters='0123456789ABCDEF';
                var color="#";
                for(var i=0;i<6;i++){
                    color+=letters[Math.floor(Math.random()*16)];
                }
                return color;
            }
            getRandomColor();
            function move(){
                var left;
                var right;
                var wh;
                left=Math.random()*1000;
                right=Math.random()*1000;
                wh=(Math.random()*150)+50;
                document.getElementById("shape").style.left=left+"px";
                document.getElementById("shape").style.right=right+"px";
                document.getElementById("shape").style.width=wh+"px";
                document.getElementById("shape").style.height=wh+"px";
                document.getElementById("shape").style.display="block";
                document.getElementById("shape").style.backgroundColor=getRandomColor();
                start= new Date().getTime();
            }
            move();
            document.getElementById("shape").onclick=function(){
                document.getElementById("shape").style.display="none";
                var end=new Date().getTime();
                var timeTaken=(end-start)/1000;
                alert(timeTaken+" seconds");
                move();
            }