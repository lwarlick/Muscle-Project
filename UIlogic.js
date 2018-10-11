var muscleArr = [];

      $(document).ready(function() {
        var isGreenDelt = false;
        var isGreenTrap = false;
        var isGreenBicep = false;
        var isGreenFlex = false;
        var isGreenObliques = false;
        var isGreenQuad = false;
        var isGreenAdd = false;
        var isGreenTib = false;
        var isGreenPec = false;
        var isGreenAbs = false;
        $("#rDeltoid").on({
          mouseover: function() {
            if (isGreenDelt) {
              $("#rDeltoid").css("background-color", "#1eb81e");
              $("#rDel").css("background-color", "#1eb81e");
              $("#lDel").css("background-color", "#1eb81e");
              $("#rDelBack").css("background-color", "#1eb81e");
              $("#lDelBack").css("background-color", "#1eb81e");
            }
            else {
              $("#rDeltoid").css("background-color", "#e62020");
              $("#rDel").css("background-color", "#e62020");
              $("#lDel").css("background-color", "#e62020");
              $("#rDelBack").css("background-color", "#e62020");
              $("#lDelBack").css("background-color", "#e62020");
            }
          },

          mouseout: function() {
            if (isGreenDelt) {
              $("#rDeltoid").css("background-color", "#27FE27");
              $("#rDel").css("background-color", "#27FE27");
              $("#lDel").css("background-color", "#27FE27");
              $("#rDelBack").css("background-color", "#27FE27");
              $("#lDelBack").css("background-color", "#27FE27");
            }
            else {
              $("#rDeltoid").css("background-color", "#db4646");
              $("#rDel").css("background-color", "#db4646");
              $("#lDel").css("background-color", "#db4646");
              $("#rDelBack").css("background-color", "#db4646");
              $("#lDelBack").css("background-color", "#db4646");
            }
          },

          click: function() {
            $(this).css("background-color", "#27FE27")
            $(this).css("border", "2px solid #1eb81e")
            $("#rDel").css("background-color", "#27FE27")
            $("#lDel").css("background-color", "#27FE27")
            $("#rDel").css("border", "2px solid #1eb81e")
            $("#lDel").css("border", "2px solid #1eb81e")
            $("#rDelBack").css("background-color", "#27FE27")
            $("#lDelBack").css("background-color", "#27FE27")
            $("#rDelBack").css("border", "2px solid #1eb81e")
            $("#lDelBack").css("border", "2px solid #1eb81e")
            isGreenDelt = true;
            muscleArr.push(this.name);
          },

          dblclick: function() {
            $(this).css("background-color", "#db4646")
            $(this).css("border", "2px solid #ff2b2b")
            $("#rDel").css("background-color", "#db4646")
            $("#lDel").css("background-color", "#db4646")
            $("#rDel").css("border", "2px solid #ff2b2b")
            $("#lDel").css("border", "2px solid #ff2b2b")
            $("#rDelBack").css("background-color", "#db4646")
            $("#lDelBack").css("background-color", "#db4646")
            $("#rDelBack").css("border", "2px solid #ff2b2b")
            $("#lDelBack").css("border", "2px solid #ff2b2b")
            isGreenDelt = false;
            muscleArr.splice(muscleArr.indexOf(this.name),1)
          },
        })

        $("#traps").on({
          mouseover: function() {
            if (isGreenTrap) {
              $("#traps").css("background-color", "#1eb81e");
              $("#rTrap").css("background-color", "#1eb81e");
              $("#lTrap").css("background-color", "#1eb81e");
              $("#rTrapBack").css("background-color", "#1eb81e");
              $("#lTrapBack").css("background-color", "#1eb81e");
            }
            else {
              $("#traps").css("background-color", "#e62020");
              $("#rTrap").css("background-color", "#e62020");
              $("#lTrap").css("background-color", "#e62020");
              $("#rTrapBack").css("background-color", "#e62020");
              $("#lTrapBack").css("background-color", "#e62020");
            }
          },

          mouseout: function() {
            if (isGreenTrap) {
              $("#traps").css("background-color", "#27FE27");
              $("#rTrap").css("background-color", "#27FE27");
              $("#lTrap").css("background-color", "#27FE27");
              $("#rTrapBack").css("background-color", "#27FE27");
              $("#lTrapBack").css("background-color", "#27FE27");
            }
            else {
              $("#traps").css("background-color", "#db4646");
              $("#rTrap").css("background-color", "#db4646");
              $("#lTrap").css("background-color", "#db4646");
              $("#rTrapBack").css("background-color", "#db4646");
              $("#lTrapBack").css("background-color", "#db4646");
            }
          },

          click: function() {
            $(this).css("background-color", "#27FE27")
            $(this).css("border", "2px solid #1eb81e")
            $("#rTrapBack").css("background-color", "#27FE27");
            $("#lTrapBack").css("background-color", "#27FE27");
            $("#rTrapBack").css("border", "2px solid #1eb81e");
            $("#lTrapBack").css("border", "2px solid #1eb81e");
            $("#rTrap").css("background-color", "#27FE27");
            $("#lTrap").css("background-color", "#27FE27");
            $("#rTrap").css("border", "2px solid #1eb81e");
            $("#lTrap").css("border", "2px solid #1eb81e");
            isGreenTrap = true;
            muscleArr.push(this.name);
          },

          dblclick: function() {
            $(this).css("background-color", "#db4646")
            $(this).css("border", "2px solid #ff2b2b")
            $("#rTrapBack").css("background-color", "#db4646");
            $("#lTrapBack").css("background-color", "#db4646");
            $("#rTrapBack").css("border", "2px solid #ff2b2b");
            $("#lTrapBack").css("border", "2px solid #ff2b2b");
            $("#rTrap").css("background-color", "#db4646");
            $("#lTrap").css("background-color", "#db4646");
            $("#rTrap").css("border", "2px solid #ff2b2b");
            $("#lTrap").css("border", "2px solid #ff2b2b");
            isGreenTrap = false;
            muscleArr.splice(muscleArr.indexOf(this.name),1)
          },
        })

        $("#bicep").on({
          mouseover: function() {
            if (isGreenBicep) {
              $("#bicep").css("background-color", "#1eb81e");
              $("#lBicep").css("background-color", "#1eb81e");
              $("#rBicep").css("background-color", "#1eb81e");
            }
            else {
              $("#bicep").css("background-color", "#e62020");
              $("#lBicep").css("background-color", "#e62020");
              $("#rBicep").css("background-color", "#e62020");
            }
          },

          mouseout: function() {
            if (isGreenBicep) {
              $("#bicep").css("background-color", "#27FE27");
              $("#lBicep").css("background-color", "#27FE27");
              $("#rBicep").css("background-color", "#27FE27");
            }
            else {
              $("#bicep").css("background-color", "#db4646");
              $("#lBicep").css("background-color", "#db4646");
              $("#rBicep").css("background-color", "#db4646");
            }
          },

          click: function() {
            $(this).css("background-color", "#27FE27")
            $(this).css("border", "2px solid #1eb81e")
            $("#rBicep").css("background-color", "#27FE27");
            $("#lBicep").css("background-color", "#27FE27");
            $("#rBicep").css("border", "2px solid #1eb81e");
            $("#lBicep").css("border", "2px solid #1eb81e");
            isGreenBicep = true;
            muscleArr.push(this.name);
          },

          dblclick: function() {
            $(this).css("background-color", "#db4646")
            $(this).css("border", "2px solid #ff2b2b")
            $("#rBicep").css("background-color", "#db4646");
            $("#lBicep").css("background-color", "#db4646");
            $("#rBicep").css("border", "2px solid #ff2b2b");
            $("#lBicep").css("border", "2px solid #ff2b2b");
            isGreenBicep = false;
            muscleArr.splice(muscleArr.indexOf(this.name),1)
          },
        })

        $("#flexor").on({
          mouseover: function() {
            if (isGreenFlex) {
              $("#flexor").css("background-color", "#1eb81e");
              $("#rFlex").css("background-color", "#1eb81e");
              $("#lFlex").css("background-color", "#1eb81e");
            }
            else {
              $("#flexor").css("background-color", "#e62020");
              $("#rFlex").css("background-color", "#e62020");
              $("#lFlex").css("background-color", "#e62020");
            }
          },

          mouseout: function() {
            if (isGreenFlex) {
              $("#flexor").css("background-color", "#27FE27");
              $("#rFlex").css("background-color", "#27FE27");
              $("#lFlex").css("background-color", "#27FE27");
            }
            else {
              $("#flexor").css("background-color", "#db4646");
              $("#rFlex").css("background-color", "#db4646");
              $("#lFlex").css("background-color", "#db4646");
            }
          },

          click: function() {
            $(this).css("background-color", "#27FE27")
            $(this).css("border", "2px solid #1eb81e")
            $("#rFlex").css("background-color", "#27FE27");
            $("#lFlex").css("background-color", "#27FE27");
            $("#rFlex").css("border", "2px solid #1eb81e");
            $("#lFlex").css("border", "2px solid #1eb81e");
            isGreenFlex = true;
            muscleArr.push(this.name);
          },

          dblclick: function() {
            $(this).css("background-color", "#db4646")
            $(this).css("border", "2px solid #ff2b2b")
            $("#rFlex").css("background-color", "#db4646");
            $("#lFlex").css("background-color", "#db4646");
            $("#rFlex").css("border", "2px solid #ff2b2b");
            $("#lFlex").css("border", "2px solid #ff2b2b");
            isGreenFlex = false;
            muscleArr.splice(muscleArr.indexOf(this.name),1)
          },
        })

        $("#obliques").on({
          mouseover: function() {
            if (isGreenObliques) {
              $("#obliques").css("background-color", "#1eb81e");
              $("#rOblique").css("background-color", "#1eb81e");
              $("#lOblique").css("background-color", "#1eb81e");
            }
            else {
              $("#obliques").css("background-color", "#e62020");
              $("#rOblique").css("background-color", "#e62020");
              $("#lOblique").css("background-color", "#e62020");
            }
          },

          mouseout: function() {
            if (isGreenObliques) {
              $("#obliques").css("background-color", "#27FE27");
              $("#rOblique").css("background-color", "#27FE27");
              $("#lOblique").css("background-color", "#27FE27");
            }
            else {
              $("#obliques").css("background-color", "#db4646");
              $("#rOblique").css("background-color", "#db4646");
              $("#lOblique").css("background-color", "#db4646");
            }
          },

          click: function() {
            $(this).css("background-color", "#27FE27")
            $(this).css("border", "2px solid #1eb81e")
            $("#rOblique").css("background-color", "#27FE27");
            $("#lOblique").css("background-color", "#27FE27");
            $("#rOblique").css("border", "2px solid #1eb81e");
            $("#lOblique").css("border", "2px solid #1eb81e");
            isGreenObliques = true;
            muscleArr.push(this.name);
          },

          dblclick: function() {
            $(this).css("background-color", "#db4646")
            $(this).css("border", "2px solid #ff2b2b")
            $("#rOblique").css("background-color", "#db4646");
            $("#lOblique").css("background-color", "#db4646");
            $("#rOblique").css("border", "2px solid #ff2b2b");
            $("#lOblique").css("border", "2px solid #ff2b2b");
            isGreenObliques = false;
            muscleArr.splice(muscleArr.indexOf(this.name),1)
          },
        })

        $("#quad").on({
          mouseover: function() {
            if (isGreenQuad) {
              $("#quad").css("background-color", "#1eb81e");
              $("#lQuad").css("background-color", "#1eb81e");
              $("#rQuad").css("background-color", "#1eb81e");
            }
            else {
              $("#quad").css("background-color", "#e62020");
              $("#lQuad").css("background-color", "#e62020");
              $("#rQuad").css("background-color", "#e62020");
            }
          },

          mouseout: function() {
            if (isGreenQuad) {
              $("#quad").css("background-color", "#27FE27");
              $("#lQuad").css("background-color", "#27FE27");
              $("#rQuad").css("background-color", "#27FE27");
            }
            else {
              $("#quad").css("background-color", "#db4646");
              $("#lQuad").css("background-color", "#db4646");
              $("#rQuad").css("background-color", "#db4646");
            }
          },

          click: function() {
            $(this).css("background-color", "#27FE27")
            $(this).css("border", "2px solid #1eb81e")
            $("#rQuad").css("background-color", "#27FE27");
            $("#lQuad").css("background-color", "#27FE27");
            $("#rQuad").css("border", "2px solid #1eb81e");
            $("#lQuad").css("border", "2px solid #1eb81e");
            isGreenQuad = true;
            muscleArr.push(this.name);
          },

          dblclick: function() {
            $(this).css("background-color", "#db4646")
            $(this).css("border", "2px solid #ff2b2b")
            $("#rQuad").css("background-color", "#db4646");
            $("#lQuad").css("background-color", "#db4646");
            $("#rQuad").css("border", "2px solid #ff2b2b");
            $("#lQuad").css("border", "2px solid #ff2b2b");
            isGreenQuad = false;
            muscleArr.splice(muscleArr.indexOf(this.name),1)
          },
        })

        $("#adductors").on({
          mouseover: function() {
            if (isGreenAdd) {
              $("#adductors").css("background-color", "#1eb81e");
              $("#lAdd").css("background-color", "#1eb81e");
              $("#rAdd").css("background-color", "#1eb81e");
            }
            else {
              $("#adductors").css("background-color", "#e62020");
              $("#lAdd").css("background-color", "#e62020");
              $("#rAdd").css("background-color", "#e62020");
            }
          },

          mouseout: function() {
            if (isGreenAdd) {
              $("#adductors").css("background-color", "#27FE27");
              $("#lAdd").css("background-color", "#27FE27");
              $("#rAdd").css("background-color", "#27FE27");
            }
            else {
              $("#adductors").css("background-color", "#db4646");
              $("#lAdd").css("background-color", "#db4646");
              $("#rAdd").css("background-color", "#db4646");
            }
          },

          click: function() {
            $(this).css("background-color", "#27FE27")
            $(this).css("border", "2px solid #1eb81e")
            $("#rAdd").css("background-color", "#27FE27");
            $("#lAdd").css("background-color", "#27FE27");
            $("#rAdd").css("border", "2px solid #1eb81e");
            $("#lAdd").css("border", "2px solid #1eb81e");
            isGreenAdd = true;
            muscleArr.push(this.name);
          },

          dblclick: function() {
            $(this).css("background-color", "#db4646")
            $(this).css("border", "2px solid #ff2b2b")
            $("#rAdd").css("background-color", "#db4646");
            $("#lAdd").css("background-color", "#db4646");
            $("#rAdd").css("border", "2px solid #ff2b2b");
            $("#lAdd").css("border", "2px solid #ff2b2b");
            isGreenAdd= false;
            muscleArr.splice(muscleArr.indexOf(this.name),1)
          },
        })

        $("#tib").on({
          mouseover: function() {
            if (isGreenTib) {
              $("#tib").css("background-color", "#1eb81e");
              $("#lTib").css("background-color", "#1eb81e");
              $("#rTib").css("background-color", "#1eb81e");
            }
            else {
              $("#tib").css("background-color", "#e62020");
              $("#lTib").css("background-color", "#e62020");
              $("#rTib").css("background-color", "#e62020");
            }
          },

          mouseout: function() {
            if (isGreenTib) {
              $("#tib").css("background-color", "#27FE27");
              $("#lTib").css("background-color", "#27FE27");
              $("#rTib").css("background-color", "#27FE27");
            }
            else {
              $("#tib").css("background-color", "#db4646");
              $("#lTib").css("background-color", "#db4646");
              $("#rTib").css("background-color", "#db4646");
            }
          },

          click: function() {
            $(this).css("background-color", "#27FE27")
            $(this).css("border", "2px solid #1eb81e")
            $("#rTib").css("background-color", "#27FE27");
            $("#lTib").css("background-color", "#27FE27");
            $("#rTib").css("border", "2px solid #1eb81e");
            $("#lTib").css("border", "2px solid #1eb81e");
            isGreenTib = true;
            muscleArr.push(this.name);
          },

          dblclick: function() {
            $(this).css("background-color", "#db4646")
            $(this).css("border", "2px solid #ff2b2b")
            $("#rTib").css("background-color", "#db4646");
            $("#lTib").css("background-color", "#db4646");
            $("#rTib").css("border", "2px solid #ff2b2b");
            $("#lTib").css("border", "2px solid #ff2b2b");
            isGreenTib = false;
            muscleArr.splice(muscleArr.indexOf(this.name),1)
          },
        })

        $("#pectoralis").on({
          mouseover: function() {
            if (isGreenPec) {
              $(this).css("background-color", "#1eb81e");
            }
            else {
              $(this).css("background-color", "#e62020");
            }
            $("#pecDescription").toggle("slide");
          },

          mouseout: function() {
            if (isGreenPec) {
              $(this).css("background-color", "#27FE27");
            }
            else {
              $(this).css("background-color", "#db4646");
            }
            $("#pecDescription").toggle("slide");
          },

          click: function() {
            $(this).css("background-color", "#27FE27")
            $(this).css("border", "2px solid #1eb81e")
            isGreenPec = true;
            muscleArr.push(this.name);
          },

          dblclick: function() {
            $(this).css("background-color", "#db4646")
            $(this).css("border", "2px solid #ff2b2b")
            isGreenPec = false;
            muscleArr.splice(muscleArr.indexOf(this.name),1)
          },
        })

        $("#abs").on({
          mouseover: function() {
            if (isGreenAbs) {
              $(this).css("background-color", "#1eb81e");
            }
            else {
              $(this).css("background-color", "#e62020");
            }
          },

          mouseout: function() {
            if (isGreenAbs) {
              $(this).css("background-color", "#27FE27");
            }
            else {
              $(this).css("background-color", "#db4646");
            }
          },

          click: function() {
            $(this).css("background-color", "#27FE27")
            $(this).css("border", "2px solid #1eb81e")
            isGreenAbs = true;
            muscleArr.push(this.name);
          },

          dblclick: function() {
            $(this).css("background-color", "#db4646")
            $(this).css("border", "2px solid #ff2b2b")
            isGreenAbs = false;
            muscleArr.splice(muscleArr.indexOf(this.name),1)
          },
        })

        $("#calcDrop").click(function() {
            $(".calcList").slideToggle(300);
        });
      })

     function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.body.style.marginLeft = "250px";
        document.body.style.opacity = "50%";
      }

      function closeNav() {
        document.getElementById("mySidenav").style.width = "0px";
        document.body.style.marginLeft = "0px";
        document.body.style.opacity = "100%";
      }