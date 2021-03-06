    // JavaScript Document
    var previousElement, previousColour, changevalue = 0,
        previousTarget = "undefined",
        selectedCategories = [],
        selectedSources = [],
        sources = ["ShareASale", "Solvid", "Amazon", "Ebay", "Digistore24", "Clickbank", "Shopify"],
        sourcesPreviousState = [],
        categoriesPreviousState = [],
        submitButtonPreviousState = "undefined",
        categoriesCheckBoxPreviousState = "undefined",
        sourcesCheckBoxPreviousState = "undefined",
        categories = ["SOFTWAREANDSERVICES", "SELFANDHELP", "ANDTRAVEL", "ANDSPORTS", "COOKINGANDFOODANDWINE", "COMPUTERSANDINTERNET", "BUSINESSANDINVESTMENT", "SPIRITUALITYANDALTERNATIVEBELIEFS", "ANDREFERENCE", "POLITICSANDCURRENTEVENTS", "PARENTINGANDFAMILIES", "ANDMOBILE", "ANDLANGUAGES", "HOMEANDGARDEN", "HEALTHANDFITNESS", "ANDGREENPRODUCTS", "ANDGAMES", "ANDFICTION", "EMPLOYMENTANDJOBS", "ANDEDUCATION", "EBUSINESSANDEMARKETING", "ANDBETTINGSYSTEMS", "ANDASSEENONTV", "ARTSANDENTERTAINMENT", "ANDSHOPPING", "ANDGIVEAWAYS"];


    $(document).ready(function () {
        $(".ALL").slideUp();
        $("#1a").click(function () {
            $(".SOFTWARESERVICES").toggle(200);
        });
        $("#1b").click(function () {
            $(".SELFHELP").toggle(200);
        });
        $("#1c").click(function () {
            $(".TRAVEL").toggle(200);
        });
        $("#1d").click(function () {
            $(".SPORTS").toggle(200);
        });
        $("#1e").click(function () {
            $(".COOKINGFOODWINE").toggle(200);
        });
        $("#1f").click(function () {
            $(".COMPUTERSINTERNET").toggle(200);
        });
        $("#1g").click(function () {
            $(".BUSINESSINVESTING").toggle(200);
        });
        $("#1h").click(function () {
            $(".SPIRITUALITYNEWAGEALTERNATIVEBELIEFS").toggle(200);
        });
        $("#1i").click(function () {
            $(".REFERENCE").toggle(200);
        });
        $("#1j").click(function () {
            $(".POLITICSCURRENTEVENTS").toggle(200);
        });
        $("#1k").click(function () {
            $(".PARENTINGFAMILIES").toggle(200);
        });
        $("#1l").click(function () {
            $(".MOBILE").toggle(200);
        });
        $("#1m").click(function () {
            $(".LANGUAGES").toggle(200);
        });
        $("#1n").click(function () {
            $(".HOMEGARDEN").toggle(200);
        });
        $("#1o").click(function () {
            $(".HEALTHFITNESS").toggle(200);
        });
        $("#1p").click(function () {
            $(".GREENPRODUCTS").toggle(200);
        });
        $("#1q").click(function () {
            $(".GAMES").toggle(200);
        });
        $("#1r").click(function () {
            $(".FICTION").toggle(200);
        });
        $("#1s").click(function () {
            $(".EMPLOYMENTJOBS").toggle(200);
        });
        $("#1t").click(function () {
            $(".EDUCATION").toggle(200);
        });
        $("#1u").click(function () {
            $(".EBUSINESSEMARKETING").toggle(200);
        });
        $("#1v").click(function () {
            $(".BETTINGSYSTEMS").toggle(200);
        });
        $("#1w").click(function () {
            $(".ASSEENONTV").toggle(200);
        });
        $("#1x").click(function () {
            $(".ARTSENTERTAINMENT").toggle(200);
        });

        $("#1y").click(function () {
            $(".SHOPPING").toggle(200);
        });

        $("#1z").click(function () {
            $(".GIVEAWAYS").toggle(200);
        });


        $("#submit").click(function () {
			$("#nonexist").hide(50);
			$("#nonexistsearch").hide(50);
            selectedCategories = [];
            selectedSources = [];
            var categoriesCheckBoxes = document.getElementById("categoriesitems");
            var sourceCheckBoxes = document.getElementById("sourceitems");
            $(".loader").show();
            $(".categories").fadeOut();
            sourcesPreviousState = [];
            for (var i = 0; i < sourceCheckBoxes.length; i++) {
                sourcesPreviousState.push(sourceCheckBoxes[i].checked);
                if (sourceCheckBoxes[i].checked)
                    selectedSources.push(sourceCheckBoxes[i].value);
            }

            categoriesPreviousState = [];
            for (var k = 0; k < categoriesCheckBoxes.length - 2; k++) {
                categoriesPreviousState.push(categoriesCheckBoxes[k].checked);
                if (categoriesCheckBoxes[k].checked)
                    selectedCategories.push(categories[k]);
            }
			

            for (var j = 0; j < selectedSources.length; j++) {
                for (var l = 0; l < selectedCategories.length; l++) {
                    $("." + selectedSources[j] + " > " + "." + selectedCategories[l]).show(50);
                }
            }
            submitButtonPreviousState = document.getElementById("submit").disabled;
            categoriesCheckBoxPreviousState = document.getElementById("Categories").checked;
            sourcesCheckBoxPreviousState = document.getElementById("source").checked;

            $(window).scrollTop(0);
            $(".myInput").hide(50, 0, function () {
                $(".example").show(200, 0, function () {
                    $(".loader").hide();
                    $(".buttonsets").show(50);
                });
            });
            if (previousTarget != "undefined") {
                $(previousTarget).css("color", previousColour);
                previousElement = "undefined";
                previousTarget = "undefined";
                changevalue = 0;
            }
        });


        $(".scroll").click(function(e) {
        e.preventDefault();
        var aid = $(this).attr("href");
        $('html,body').animate({scrollTop: $(aid).offset().top},'fast');
    });
		
		

        //Get the button
        var mybutton = document.getElementById("myBtn");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function () {
            scrollFunction();
        };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }


        $("#advancedsearch").click(function () {
            $(".example").slideUp(100, 0, function () {
                $(".buttonsets").slideUp(50, 0, function () {
                    $(".myInput").slideDown(200);
                });
            });
        });


        $("#productsearch").click(function () {
            //selectedCategories = []; selectedSources=[];
			$("#nonexist").hide(50);
            var searchString = $("#search2").val();
            if (searchString == "") {
                return
            }
            $(".loader").show();
            searchString = searchString.replace(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, " ");
            searchString = searchString.trim();
            var searchPattern = new RegExp(searchString, "i");
            var searchedResults = [];
            if (selectedCategories.lenght == 0 || selectedSources.length == 0) {
                for (var i = 0; i < sources.length; i++) {
                    for (var j = 0; j < categories.length; j++) {
                        var categorySize = $("." + sources[i] + " > " + "." + categories[j]).length;
                        for (var m = 0; m < categorySize; m++) {
                            if ($($("." + sources[i] + " > " + "." + categories[j])[m]).text().replace(/learn more/i, "").search(searchPattern) >= 0) {
                                searchedResults.push($($("." + sources[i] + " > " + "." + categories[j])[m]));
                            }
                        }
                    }

                }

            } else {
                for (var k = 0; k < selectedSources.length; k++) {
                    for (var l = 0; l < selectedCategories.length; l++) {
                        var categorySize = $("." + selectedSources[k] + " > " + "." + selectedCategories[l]).length;
                        for (var m = 0; m < categorySize; m++) {
                            if ($($("." + selectedSources[k] + " > " + "." + selectedCategories[l])[m]).text().replace(/learn more/i, "").search(searchPattern) >= 0) {
                                searchedResults.push($($("." + selectedSources[k] + " > " + "." + selectedCategories[l])[m]));
                            }
                        }

                    }
                }
            }
            $(".categories").hide(50);
            if (searchedResults.length == 0) {
                $(".loader").hide();
				$("#nonexistsearch").show(50);
            } else {
                for (var m = 0; m < searchedResults.length; m++) {
                    if (m == searchedResults.length - 1) {
                        searchedResults[m].show(50, function () {
                            $(".loader").hide();$("#nonexistsearch").hide(50);
                        });
                    } else {
                        searchedResults[m].show(50);
                    }
                }
            }

            if (previousTarget != "undefined") {
                $(previousTarget).css("color", previousColour);
                previousElement = "undefined";
                previousTarget = "undefined";
                changevalue = 0;
            }
			$(window).scrollTop(0);
            //$("#search2").val("");
            //$(".loader").hide();
        });

		$("#cancelit").click(function () {
			$("#cancel").click();
		});

        $("#cancel").click(function () {
            var submitButton = document.getElementById("submit");
            var sourceCheckBoxes = document.getElementById("sourceitems");
            var categoriesCheckBoxes = document.getElementById("categoriesitems");
            var categoriesCheckBox = document.getElementById("Categories");
            var sourceCheckBox = document.getElementById("source");
            if (sourcesPreviousState.length != 0) {
                for (var i = 0; i < sourceCheckBoxes.length; i++) {
                    sourceCheckBoxes[i].checked = sourcesPreviousState[i];
                }

                for (var k = 0; k < categoriesCheckBoxes.length - 2; k++) {
                    categoriesCheckBoxes[k].checked = categoriesPreviousState[k];
                }
                submitButton.disabled = submitButtonPreviousState;
                categoriesCheckBox.checked = categoriesCheckBoxPreviousState;
                sourceCheckBox.checked = sourcesCheckBoxPreviousState;
            } else {
                for (i = 0; i < sourceCheckBoxes.length; i++) {
                    sourceCheckBoxes[i].checked = false;
                }

                for (k = 0; k < categoriesCheckBoxes.length - 2; k++) {
                    categoriesCheckBoxes[k].checked = false;
                }

                submitButton.disabled = true;
                categoriesCheckBox.checked = false;
                sourceCheckBox.checked = false;

            }

            $(".myInput").slideUp(50, 0, function () {
                $(".example").slideDown(200, 0, function () {
                    $(".buttonsets").slideDown(50);
					slideCategoriesSearch();
                });
            });
        });

        const splitURL = window.location.href.split("?");
		const inner = splitURL[0].split("/");
            var length = inner.length;
        if (splitURL.length > 1) {
			if(splitURL[1]==""){
				loadStoreOffer("#xxxx");
			}else{
            if (inner[length - 1] == "store.html")
				//add the split("&") in case backlinks that has additinal parameters
                loadStoreOffer("#" + (splitURL[1]).split("=")[1].split("&")[0]);
			}
        }else if(inner[length - 1] == "store.html" && splitURL.length == 1){
			loadStoreOffer("#enterid")
		}

        function loadStoreOffer(content) {
            $(".loader").show();
            if ($(content).length == 0) {
                $("#nonexistingoffer").fadeIn(function () {
                    $(".loader").hide();
                });

            } else {
                $("#nonexistingoffer").fadeOut(function () {
                    $(content).fadeIn(function () {
                        $(".loader").hide();
                    });
                });

            }
        }

        $(window).scrollTop(0);
    });


    function loadContent(content) {
		$("#nonexistsearch").hide(50);
        if (content === previousElement)
            return;
        if (previousTarget != $(Event.target)) {
            previousColour = $(event.target).css("color");
            changevalue++;
            if (previousTarget == "undefined")
                previousTarget = $(event.target);
            $(event.target).css("color", "red");
            if (changevalue == 2) {
                previousTarget.css("color", previousColour);
                changevalue = 1;
                previousTarget = $(event.target);
            }

        }
        previousElement = content;
        $(".loader").show();
        if ($("." + content).length == 0) {
            $("#nonexist").fadeOut(50, 0, function () {
                $(".categories").fadeOut(50, 0, function () {
                    $("#nonexist").fadeIn(50, 0, function () {
                        $(".loader").hide(50);
                        w3_close();
                    });
                });
            });

        } else {
            $("#nonexist").fadeOut(50, 0, function () {
                $(".categories").fadeOut(50);
                $("." + content).fadeIn(50, 0, function () {
                    $(".loader").hide(50);
                    w3_close();
                });
            });

        }

        $(window).scrollTop(0);
        // $(".loader").hide();
    }

    function enableInput() {
        var categoriesCheckBoxes = document.getElementById("categoriesitems");
        var submitButton = document.getElementById("submit");
        for (var k = 0; k < categoriesCheckBoxes.length - 2; k++) {
            if (categoriesCheckBoxes[k].checked == true) {
                submitButton.disabled = false;
                break;
            }
            if (k == categoriesCheckBoxes.length - 3) {
                document.getElementById("submit").disabled = true;
            }
        }
    }

    function checkAllSources() {
        var categoriesCheckBox = document.getElementById("Categories");
        var sourceCheckBox = document.getElementById("source");
        var sourceCheckBoxes = document.getElementById("sourceitems");
        var categoriesCheckBoxes = document.getElementById("categoriesitems");
        if (sourceCheckBox.checked) {
            for (var i = 0; i < sourceCheckBoxes.length; i++) {
                sourceCheckBoxes[i].checked = true;
            }
			$("#cancelit").slideUp();
            $("#categor").slideDown();
            $(categoriesCheckBoxes).slideDown();
        } else {
            for (var j = 0; j < sourceCheckBoxes.length; j++) {
                sourceCheckBoxes[j].checked = false;
            }
            categoriesCheckBox.checked = false;
            for (var k = 0; k < categoriesCheckBoxes.length - 2; k++) {
                categoriesCheckBoxes[k].checked = false;
            }
			$("#cancelit").slideDown();
            $("#categor").slideUp();
            $(categoriesCheckBoxes).slideUp();
        }
        enableInput();
    }


    function checkAllCategories() {
        var categoriesCheckBox = document.getElementById("Categories");
        var categoriesCheckBoxes = document.getElementById("categoriesitems");

        if (categoriesCheckBox.checked) {
            for (var k = 0; k < categoriesCheckBoxes.length - 2; k++) {
                categoriesCheckBoxes[k].checked = true;
            }
            document.getElementById("submit").disabled = false;
        } else {
            for (var l = 0; l < categoriesCheckBoxes.length - 2; l++) {
                categoriesCheckBoxes[l].checked = false;
            }
            document.getElementById("submit").disabled = true;
        }
    }


    function checkCategoriesBox() {
        var categoriesCheckBox = document.getElementById("Categories");
        var categoriesCheckBoxes = document.getElementById("categoriesitems");
        for (var m = 0; m < categoriesCheckBoxes.length - 2; m++) {
            if (categoriesCheckBoxes[m].checked == false) {
                categoriesCheckBox.checked = false;
                break;
            }
            if (m == categoriesCheckBoxes.length - 3) {
                categoriesCheckBox.checked = true;
            }

        }

        enableInput();
    }
   

    function slideCategoriesSearch() {
        var categoriesCheckBox = document.getElementById("Categories");
        var sourceCheckBoxes = document.getElementById("sourceitems");
        var categoriesCheckBoxes = document.getElementById("categoriesitems");
        for (var i = 0; i < sourceCheckBoxes.length; i++) {
            if (sourceCheckBoxes[i].checked == true) {
				$("#cancelit").slideUp();
                $("#categor").slideDown();
                $(categoriesCheckBoxes).slideDown();
                break;
            }
            if (i == sourceCheckBoxes.length - 1) {
                for (var k = 0; k < categoriesCheckBoxes.length - 2; k++) {
                    categoriesCheckBoxes[k].checked = false;
                }
				$("#cancelit").slideDown();
                categoriesCheckBox.checked = false;
                $("#categor").slideUp();
                $(categoriesCheckBoxes).slideUp();
            }
        }

        var sourceCheckBox = document.getElementById("source");
        for (var m = 0; m < sourceCheckBoxes.length; m++) {
            if (sourceCheckBoxes[m].checked == false) {
                sourceCheckBox.checked = false;
                break;
            }
            if (m == sourceCheckBoxes.length - 1) {
                sourceCheckBox.checked = true;
            }

        }
        enableInput();
    }