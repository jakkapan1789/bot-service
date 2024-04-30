const natural = require("natural");
const sampleResponses = require("../models/Conversatiom");

async function getBestMatchedResponse(req, res) {
  const { message } = req.params;

  try {
    const response = findBestAnswer(message);

    res.json(response);
  } catch (err) {
    console.error(`Error fetching big data "${message}":`, err);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function searcher(req, res) {
  const { topic, message } = req.body;

  try {
    const response = findBestAnswer(message);
    res.json(response);
  } catch (err) {
    console.error(`Error fetching big data "${message}":`, err);
    res.status(500).json({ error: "Internal server error" });
  }
}

let conversationHistory = [];
function findBestAnswer(message) {
  const tokenizer = new natural.WordTokenizer();
  const tokens = tokenizer.tokenize(message.toLowerCase());
  conversationHistory.push(message.toLowerCase());
  let bestMatch = null;
  let bestScore = -1;
  for (const key in sampleResponses) {
    const responseTokens = tokenizer.tokenize(key.toLowerCase());
    const score = natural.JaroWinklerDistance(
      tokens.join(" "),
      responseTokens.join(" ")
    );
    if (score > bestScore) {
      bestScore = score;
      bestMatch = sampleResponses[key];
    }
  }

  return bestMatch;
}

// Initialize conversation history

// let conversationHistory = [];

// function findBestAnswer(message) {
//   const tokenizer = new natural.WordTokenizer();
//   const tokens = tokenizer.tokenize(message.toLowerCase());
//   let bestMatch = null;
//   let bestScore = -1;

//   // Check if the message is one of the sample responses
//   if (sampleResponses.hasOwnProperty(message)) {
//     return sampleResponses[message];
//   }

//   // Add current message to conversation history
//   conversationHistory.push(message.toLowerCase());

//   // Iterate through sample responses to find the best match
//   for (const key in sampleResponses) {
//     const responseTokens = tokenizer.tokenize(key.toLowerCase());
//     const score = natural.JaroWinklerDistance(
//       tokens.join(" "),
//       responseTokens.join(" ")
//     );
//     if (score > bestScore) {
//       bestScore = score;
//       bestMatch = sampleResponses[key];
//     }
//   }

//   // Merge first question with subsequent questions for finding the best match
//   const mergedQuestions = conversationHistory.join(" ");

//   // Check if there is context in merged question
//   if (mergedQuestions.length > 0) {
//     // Iterate through sample responses again with merged question
//     for (const key in sampleResponses) {
//       const responseTokens = tokenizer.tokenize(key.toLowerCase());
//       const score = natural.JaroWinklerDistance(
//         mergedQuestions,
//         responseTokens.join(" ")
//       );
//       if (score > bestScore) {
//         bestScore = score;
//         bestMatch = sampleResponses[key];
//       }
//     }
//   }

//   return bestMatch;
// }

module.exports = { getBestMatchedResponse, searcher };
