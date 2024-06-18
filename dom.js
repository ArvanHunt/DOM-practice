                                                            **** D O M   M A N I P U L A T I O N ****


 ID 
    * document.getElementById("myId")
        let ID = document.getElementById("sample");

 CLASS
    * document.getElementsByClassName("container");
        let CLASS = document.getElementsByClassName("container");

 TAG
    * document.getElementsByTagName("h1");
        let H1 = document.getElementsByTagName("h1");

QUERY SELECTOR - RETURNS "NODE-LIST"                    // "querySelector means accessing the HTML from JAVA SCRIPT"
    * document.querySelector("#myID / ".myClass" / "tag");
        let ID = document.querySelector("#sample"); //gives the 1st "ID" in document.

        let CLASS = document.querySelector(".container"); //gives the 1st "CLASS" in the document.

        let TAG = document.querySelector("p"); //gives the 1st "PARAGRAPH", "HEADING" , "BUTTON" in the document.
        
QUERY SELECTOR ALL
    * document.querySelectorAll("#myID" / ".myClass" / "tag");
        //let ID = document.querySelectorAll("#sample"); //gives the every "ID" in document.

        let CLASS = document.querySelectorAll(".container"); //gives the every "CLASS" in the document.

        let TAG = document.querySelectorAll("p"); //gives the every "PARAGRAPH", "HEADING" , "BUTTON" in the document.

PROPERTIES - (Can check the VALUES[GET] and Can CHANGE the VALUES[SET])

    * TAG NAME [RETURNS TAG FOR ELEMENT NODES]
        DECLARED VARIABLE.tagName    
    
    * INNER TEXT [RETURNS THE TEXT CONTENT OF THE ELEMENT AND ALL ITS CHILDREN]
        DECLARED VARIABLE.innerText   
        DECLARED VARIABLE.innerText = abcd  // imp : can give any text , change will happen in the display 

        
    * INNER HTML [RETURN THE PLAIN TEXT or HTML CONTENTS IN THE ELEMENTS]
        DECLARED VARIABLE.innerHtml
        // imp : DECLARED VARIABLE.innerHtml = <div>creates div</div>
        // heading.innerHtml = <i>new heading</i> ----- can create any HTML contents.

    * TEXT CONTENT [RETURNS THE TEXTUAL CONTENT EVEN FOR HIDDEN ELEMENTS]
        DECLARED VARIABLE.textContent
        //just like innertext but even for hidden elements ex: style visibility:hidden;
        //heading.textContent;

ATTRIBUTES [TO GET THE ATTRIBUTE VALUE]
    * getAttribute
            ex1 : <p class="myClass">this is my para</p> ----- class is tghe attribute
            ex2 : <div id = "newdiv">this is a div</div> ----- id is the attribute
        * let paragraph = document.querySelector("p");
            console.log(P.getAttribute("class")); //ex1 
        * let variableName = div.getAttribute("id"); //ex2       

    * setAttribute
            setAttribute(attr,value);
                * let paragraph = document.querySelector("p");
                    console.log(P.setAttribute("class", "newClass")); //ex1 ---- value of the class
                * let variableName = div.setAttribute("id", "newId"); //ex2 ---- value of the id
             
STYLE 
    * NODE.STYLE 
        * let style = document.querySelector("dom");
            div.style.backgroundColor = "green";
            div.style.fontSize = "30px";
            div.innerText = "hello";
            div.style.visibility = "hidden";

INSERT ELEMENTS  ---- this includes 2 steps : first CREATE then ADDS
            imp : To create a new one ------ [  let element = document.createElement("div");  ] // 

    * NODE.APPEND( EL ) ------- adds at the end of node[inside]
            ex : let newBtn = document.querySelector("button");  //creating a button
                newBtn.innerText = "click me!";

                let div = document.querySelector("div");
                div.append(newBtn); ---- //add at the END of the div ---- at the DISPLAY
        
    * NODE.PREPEND( EL ) //adds at the start of node (inside)
                ex : let newBtn = document.querySelector("button");  //creating a button
                        newBtn.innerText = "click me!";

                        let div = document.querySelector("div");
                        div.prepend(newBtn); ---- //add at the START of the div ---- at the DISPLAY

    * NODE.BEFORE( EL ) //adds at the start of node (inside)
                ex : let newBtn = document.querySelector("button");  //creating a button
                        newBtn.innerText = "click me!";
        
                        let div = document.querySelector("div");
                        div.before(newBtn); ---- //add at the BEFORE of the div ---- at the DISPLAY

    * NODE.AFTER( EL ) //adds at the start of node (inside)
                ex : let newBtn = document.querySelector("button");  //creating a button
                        newBtn.innerText = "click me!";
                
                        let div = document.querySelector("div");
                        div.after(newBtn); ---- //add at the AFTER of the div ---- at the DISPLAY

            EX : let newHeading = document.querySelector("h1");
                    newHeading.innerHTML = <i>Hi! I am new</i>;

                    document.querySelector("body").append(newHeading); //adds at the end of the body
                    document.querySelector("body").prepend(newHeading); // adds at the start of the body
                    document.querySelector("body").before(newHeading);  // adds before the body
                    document.querySelector("body").after(newHeading); // adds after the body

DELETE ELEMENT 
    *NODE.REMOVE()
        ex: let para = document.querySelector("p");
                para.remove();                      // delete the paragraph from the display
        ex: let head = document.querySelector("h1");
                head.remove();                      // delete the heading from the display


                
                                        //for further clarity visit "mdn" website//


        
        
   




