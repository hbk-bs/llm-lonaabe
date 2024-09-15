/**
 * This is a simple example of how you can import
 * the ollama sdk and work with that
 * import ollama from "https://esm.sh/ollama/browser"
 * add the code below to your buttons click event listener
 * const respone = await ollama.chat({messages: [{role: 'user', content: 'What is the capital of the United States?'}]});
 * console.log(response);
 */
// ----------------------------
/**
 * There might be another way. The platform val.town
 * allows free requests to openai api. https://www.val.town/v/std/openai
 * Limits are:
 * - Usage Quota: We limit each user to 10 requests per minute.
 * - Features: Chat completions is the only endpoint available.
 * - There is no streaming support
 *
 * This might be enough for our usecase.
 * Do make this easier @ff6347 wrote this simple wrapper class
 * that you can use to interact with val.town openai api
 * mimicing the ollama sdk.
 * It is an esm module so you need to include type="module" in your script tag
 * <script type="module" src="index.js"></script>
 */



// import the wrapper class

import ollama from 'https://esm.sh/ollama/browser';
import { LLM } from './llm.js';

// create an instance of the class
// you need to insert the run url for your val.town openai api
// @ff6347 will instruct you on how to get this
const host = "https://lonaabe-classicalorangesilverfish.web.val.run/";
const llm = new LLM({
  host: '<https://lonaabe-openai_api.web.val.run/>',
});

// get the button#run element from the index.html
const chatButton = document.getElementById('run');
const svgContainer = document.getElementById('svgContainer');
const rhymeInput = document.getElementById('rhymeInput');
// Funktion zum Erzeugen des SVG-Musters
function generateSVGPattern(data) {
  let svgContent = `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="white"/>`;

    data.forEach(item => {
      const [x, y, color] = item.split(" ");
      svgContent += `<rect x="${x}" y="${y}" width="20" height="20" fill="${color}" />`;
    });
  
  svgContent += `</svg>`;
  return svgContent;
}

function generatePatternBasedOnRhyme(rhyme) {
  let data;
  if (rhyme.endsWith('e')) {
    // Muster für Reim auf 'e'
    data = [
      "0 0 #2841b0", "0 20 #2841b0", "0 40 #2841b0", "0 60 #2841b0",
      
      "60 0 #53f584", "60 20 #53f584", "60 40 #53f584", "60 60 #53f584",
      "0 0  #2841b0",
"0 20 #2841b0","100 20  #41947b",
"100 40  #41947b",
"100 60  #41947b",
"100 80  #41947b",
"100 100 #41947b",
"100 120 #41947b",
"100 140 #41947b",
"100 160 #41947b",
"100 180 #41947b",

"120 0   #41947b",
"120 20  #41947b",
"120 40  #41947b",
"120 60  #41947b",
"120 80  #41947b",
"120 100 #41947b",
"120 120 #41947b",
"120 140 #41947b",
"120 160 #41947b",
"0 40 #2841b0",
"0 60 #2841b0","0 80   #7d3de3",
"0 100  #7d3de3",
"0 120  #7d3de3",
"0 140  #7d3de3",
"0 160  #7d3de3",
"0 180  #7d3de3",
//  
"20 0   #35b5a4",
"20 20  #35b5a4",
"20 40  #35b5a4",
"20 60  #35b5a4",
"20 80  #35b5a4",
"20 100 #53f584",
"20 120 #53f584",
"20 140 #53f584",
"20 160 #53f584","40 0   #eda807",
"40 20  #eda807",
"40 40  #eda807",
"40 60  #eda807",
"40 80  #eda807",
"40 100 #eda807",
"40 120 #eda807",
"40 140 #eda807",
"40 160 #eda807",
"40 180 #eda807",
//
"60 0   #de721f",
"60 20  #de721f",
"60 40  #de721f",
"60 60  #de721f",
"60 80  #de721f",
"60 100 #de721f",
"60 120 #de721f",
"60 140 #de721f",
"60 160 #de721f",
"60 180 #de721f",
//
"80 0   #f22b0c",
"80 20  #f22b0c",
"80 40  #f22b0c",
"80 60  #f22b0c",
"80 80  #f22b0c",
"80 100 #f22b0c",
"80 120 #f22b0c",
"80 140 #f22b0c",
"80 160 #f22b0c",
"80 180 #f22b0c","0 80   #7d3de3",
"0 100  #7d3de3",
"0 120  #7d3de3",
"0 140  #7d3de3",
"0 160  #7d3de3",
"0 180  #7d3de3",
//  
"20 0   #35b5a4",
"20 20  #35b5a4",
"20 40  #35b5a4",
"20 60  #35b5a4",
"20 80  #35b5a4",
"20 100 #53f584",
"20 120 #53f584",
"20 140 #53f584",
"20 160 #53f584",
"20 180 #53f584","60 60  #de721f",
"60 80  #de721f",
"60 100 #de721f",
"60 120 #de721f",
"60 140 #de721f",
"60 160 #de721f",
"60 180 #de721f", 
//
"80 0   #f22b0c",
"80 20  #f22b0c",
"80 40  #f22b0c",
"80 60  #f22b0c",
"80 80  #f22b0c",
"80 100 #f22b0c",
"80 120 #f22b0c",
"80 140 #f22b0c",
"80 160 #f22b0c",
"80 180 #f22b0c",
//
"100 0   #41947b",
"100 20  #41947b",
"100 40  #41947b",
"100 60  #41947b",
"100 80  #41947b",
"100 100 #41947b",
"100 120 #41947b",
"100 140 #41947b",
"100 160 #41947b",
"100 180 #41947b",
//
"120 0   #41947b",
"120 20  #41947b",
"120 40  #41947b",
"120 60  #41947b",
"120 80  #41947b",
"120 100 #41947b",
"120 120 #41947b",
"120 140 #41947b",
"120 160 #41947b",
"120 180 #41947b",
//
"140 0   #0d6da8",
"140 20  #0d6da8",
"140 40  #0d6da8",
"140 60  #0d6da8",
"140 80  #0d6da8",
"140 100 #0d6da8",
"140 120 #0d6da8",
"140 140 #0d6da8",
"140 160 #0d6da8",
"140 180 #0d6da8",
//
"160 0   #202d73",
"160 20  #202d73",
"160 40  #202d73",
"160 60  #202d73",
"160 80  #202d73",
"160 100 #202d73",
"160 120 #202d73",
"160 140 #202d73",
"160 160 #202d73",
"160 180 #202d73",
    ];
  } else if (rhyme === 'paarreim') {
    // Muster für Paarreim (AABB)
    data = [
      "0 0 #FF5733", "0 20 #FF5733", "20 0 #FF5733", "20 20 #FF5733",
      "0 40 #C70039", "0 60 #C70039", "20 40 #C70039", "20 60 #C70039","20 100 #53f584",
      "20 120 #53f584",
      "20 140 #53f584",
      "20 160 #53f584",
      "20 180 #53f584","100 0   #41947b",
      "100 20  #41947b",
      "100 40  #41947b",
      "100 60  #41947b",
      "100 80  #41947b",
      "100 100 #41947b",
      "100 120 #41947b",
      "100 140 #41947b",
      "100 160 #41947b",
      "100 180 #41947b","180 0   #7d3de3",
      "180 20  #7d3de3",
      "180 40  #7d3de3",
      "180 60  #7d3de3",
      "180 80  #7d3de3",
      "180 100 #7d3de3",
      "180 120 #7d3de3",
      "180 140 #7d3de3",
      "180 160 #7d3de3",
      "180 180 #7d3de3","100 140 #41947b",
      "100 160 #41947b",
      "100 180 #41947b",
      //
      "120 0   #41947b",
      "120 20  #41947b",
      "120 40  #41947b",
      "120 60  #41947b",
      "120 80  #41947b",
      "120 100 #41947b",
      "120 120 #41947b",
      "120 140 #41947b",
      "120 160 #41947b",
      "120 180 #41947b",
      //
      "140 0   #0d6da8",
      "140 20  #0d6da8",
      "140 40  #0d6da8",
      "140 60  #0d6da8",
      "140 80  #0d6da8",
      "140 100 #0d6da8",
      "140 120 #0d6da8",
      "140 140 #0d6da8",
      "140 160 #0d6da8",
      
    ];
  } else if (rhyme === 'kreuzreim') {
    // Muster für Kreuzreim (ABAB)
    data = [
      
      "40 0 #FF5733", "40 20 #C70039", "60 0 #FF5733", "60 20 #C70039",
      "40 40 #900C3F", "40 60 #581845", "60 40 #900C3F", "60 60 #581845","160 140 #202d73",
      "160 160 #202d73",
      "160 180 #202d73",
      
      "180 0   #7d3de3",
      "180 20  #7d3de3",
      "180 40  #7d3de3",
      "180 60  #7d3de3",
      "180 80  #7d3de3",
      "180 100 #7d3de3",
      "180 120 #7d3de3","180 60  #7d3de3",
      "180 80  #7d3de3",
      "180 100 #7d3de3",
      "180 120 #7d3de3",
      "180 140 #7d3de3",
      "180 160 #7d3de3",
      "180 180 #7d3de3","60 60  #de721f",
      "60 80  #de721f",
      "60 100 #de721f",
      "60 120 #de721f",
      "60 140 #de721f",
      "60 160 #de721f",
      "60 180 #de721f",
      //
      "80 0   #f22b0c",
      "80 20  #f22b0c",
      "80 40  #f22b0c",
      "80 60  #f22b0c",
      "80 80  #f22b0c",
      "80 100 #f22b0c",
    ];
  } else if (rhyme.endsWith('a')) {
    // Muster für Reim auf 'a'
    data = [
      
      "40 0 #202d73", "40 20 #202d73", "40 40 #202d73", "40 60 #202d73",
      "60 0 #400999", "60 20 #400999", "60 40 #400999", "60 60 #400999","40 100 #eda807",
      "40 120 #eda807",
      "40 140 #eda807",
      "40 160 #eda807",
      "40 180 #eda807",
      
      "60 0   #de721f",
      "60 20  #de721f",
      "60 40  #de721f",
      "60 60  #de721f",
      "60 80  #de721f",
      "60 100 #de721f",
      "20 80  #35b5a4",
      "20 100 #53f584",
      "20 120 #53f584",
      "20 140 #53f584","160 100 #202d73",
      "160 120 #202d73",
      "160 140 #202d73",
      "160 160 #202d73",
      "160 180 #202d73",
      //
      "180 0   #7d3de3",
      "180 20  #7d3de3",
      "180 40  #7d3de3",
      "180 60  #7d3de3",
      "180 80  #7d3de3",
      "180 100 #7d3de3",
      "180 120 #7d3de3",
      "180 140 #7d3de3",
      "180 160 #7d3de3",
      "180 180 #7d3de3",
    ];
  } else {
    // Standardmuster, falls kein spezielles Reimschema erkannt wird
    data = [
      
      "40 0 #f58982", "40 20 #fc79ef", "60 0 #ed45dc", "60 20 #bf0876",
      "40 40 #f58982", "40 60 #fc79ef", "60 40 #dd4dfa", "60 60 #bf0876","20 100 #53f584",
      "20 120 #53f584",
      "20 140 #53f584",
      "20 160 #53f584",
      "20 180 #53f584",
      "0 0  #2841b0",
"0 20 #2841b0",
"0 40 #2841b0",
"0 60 #2841b0", "0 80   #7d3de3",
"0 100  #7d3de3",
"0 120  #7d3de3",
"0 140  #7d3de3",
"0 160  #7d3de3",
"0 180  #7d3de3",

"20 0   #35b5a4",
"20 20  #35b5a4",
"20 40  #35b5a4",
"20 60  #35b5a4",
"20 80  #35b5a4",
"20 100 #53f584",
"20 120 #53f584",
"20 140 #53f584",
"20 160 #53f584",
"20 180 #53f584","0 80   #7d3de3",
"0 100  #7d3de3",
"0 120  #7d3de3",
"0 140  #7d3de3",
"0 160  #7d3de3",
"0 180  #7d3de3",
//  
"20 0   #35b5a4",
"20 20  #35b5a4",
"20 40  #35b5a4",
"20 60  #35b5a4",
"20 80  #35b5a4",
"20 100 #53f584",
"20 120 #53f584",
"20 140 #53f584",
"20 160 #53f584",

"20 180 #53f584","40 0   #eda807",
"40 20  #eda807",
"40 40  #eda807",
"40 60  #eda807",
"40 80  #eda807",
"40 100 #eda807",
"40 120 #eda807",
"40 140 #eda807",
"40 160 #eda807",
"40 180 #eda807",
//
"60 0   #de721f",
"60 20  #de721f",
"60 40  #de721f",
"60 60  #de721f",
"60 80  #de721f",
"60 100 #de721f",
"60 120 #de721f",
"60 140 #de721f",
"60 160 #de721f",
"60 180 #de721f",
//
"80 0   #f22b0c",
"80 20  #f22b0c",
"80 40  #f22b0c",
"80 60  #f22b0c",
"80 80  #f22b0c",
"80 100 #f22b0c",
"80 120 #f22b0c",
"80 140 #f22b0c",



    ];
  }

  return data;
}

  
 

// add a click event listener to the button that runs the async function
chatButton.addEventListener('click', async () => {
  // some options for the chat
  //const format = 'json'; // we want json output
  const rhyme = rhymeInput.value.trim();


  if (!rhyme) {
    alert('Please enter a rhyme.');
    return;
  }
  
  // we set the seed so we get always the same output
  // we set the temperature which controls the creativity of the model
  //const options = {
  //  seed: 42,
  //  temperature: 0.5,
  //};
  // the messages that we want to send to the model
  // allowed are 'system', 'assistant' and 'user' role for the messages
  
  try {
    const data = generatePatternBasedOnRhyme(rhyme);
  // Generate the SVG pattern
  const svgPattern = generateSVGPattern(data);

  // Insert the SVG pattern into the container
  svgContainer.innerHTML = svgPattern;
} catch (error) {
  console.error(error);
}
});
//   {
//      role: 'user',
//      content:
//        'You are a helpful assistant. Always respond in JSON and only JSON. The User will give a rhyme, and you will choose coordinates and colors based on the rhyme. Here is a rhyme: ${house mouse}'
//      }
//  ]
    
// const data = [
//"0 0  #2841b0",
//"0 20 #2841b0",
//"0 40 #2841b0",
//"0 60 #2841b0",
//"0 80   #7d3de3",
//"0 100  #7d3de3",
//"0 120  #7d3de3",
//"0 140  #7d3de3",
//"0 160  #7d3de3",
//"0 180  #7d3de3",
//
//"20 0   #35b5a4",
//"20 20  #35b5a4",
//"20 40  #35b5a4",
//"20 60  #35b5a4",
//"20 80  #35b5a4",
//"20 100 #53f584",
//"20 120 #53f584",
//"20 140 #53f584",
//"20 160 #53f584",
//"20 180 #53f584",
//  
//"40 0   #eda807",
//"40 20  #eda807",
//"40 40  #eda807",
//"40 60  #eda807",
//"40 80  #eda807",
//"40 100 #eda807",
//"40 120 #eda807",
//"40 140 #eda807",
//"40 160 #eda807",
//"40 180 #eda807",
//
//"60 0   #de721f",
//"60 20  #de721f",
//"60 40  #de721f",
//"60 60  #de721f",
//"60 80  #de721f",
//"60 100 #de721f",
//"60 120 #de721f",
//"60 140 #de721f",
//"60 160 #de721f",
//"60 180 #de721f", 
//
//"80 0   #f22b0c",
//"80 20  #f22b0c",
//"80 40  #f22b0c",
//"80 60  #f22b0c",
//"80 80  #f22b0c",
//"80 100 #f22b0c",
//"80 120 #f22b0c",
//"80 140 #f22b0c",
//"80 160 #f22b0c",
//"80 180 #f22b0c",
//
//"100 0   #41947b",
//"100 20  #41947b",
//"100 40  #41947b",
//"100 60  #41947b",
//"100 80  #41947b",
//"100 100 #41947b",
//"100 120 #41947b",
//"100 140 #41947b",
//"100 160 #41947b",
//"100 180 #41947b",
//
//"120 0   #41947b",
//"120 20  #41947b",
//"120 40  #41947b",
//"120 60  #41947b",
//"120 80  #41947b",
//"120 100 #41947b",
//"120 120 #41947b",
//"120 140 #41947b",
//"120 160 #41947b",
//"120 180 #41947b",
//
//"140 0   #0d6da8",
//"140 20  #0d6da8",
//"140 40  #0d6da8",
//"140 60  #0d6da8",
//"140 80  #0d6da8",
//"140 100 #0d6da8",
//"140 120 #0d6da8",
//"140 140 #0d6da8",
//"140 160 #0d6da8",
//"140 180 #0d6da8",
//
//"160 0   #202d73",
//"160 20  #202d73",
//"160 40  #202d73",
//"160 60  #202d73",
//"160 80  #202d73",
//"160 100 #202d73",
//"160 120 #202d73",
//"160 140 #202d73",
//"160 160 #202d73",
//"160 180 #202d73",
//
//"180 0   #7d3de3",
//"180 20  #7d3de3",
//"180 40  #7d3de3",
//"180 60  #7d3de3",
//"180 80  #7d3de3",
//"180 100 #7d3de3",
//"180 120 #7d3de3",
//"180 140 #7d3de3",
//"180 160 #7d3de3",
//"180 180 #7d3de3"
//
//
//
//
//
//    // Weitere Daten hier einfügen...
//  ];
//  try {
//    // now we make the call to the api.
//    // we wrap it in a try catch block to catch any errors
//    //const response = await llm.chat({ format: 'json', //options: { seed: 42, temperature: 0.5 }, messages });
//    //console.log(response);
//
//    //const coordinates = response.data.coordinates;
//    //const colors = response.data.colors;
//    // Erzeuge das SVG-Muster
//    const svgPattern = generateSVGPattern(data);
//
//    // Füge das SVG-Muster in den Container ein
//    svgContainer.innerHTML = svgPattern;
//  } catch (error) {
//    // we had an error lets handle it
//    console.error(error);
//  }
//});
//