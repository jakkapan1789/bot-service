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
function detectEnglishMessage(message) {
  const englishRegex = /^[a-zA-Z0-9 .,!?]+$/;
  return englishRegex.test(message);
}

function detectUnclearQuestion(message) {
  if (!detectEnglishMessage(message)) {
    return false;
  }
  const questionWords = ["who", "what", "when", "where", "why", "how"];
  const tokens = message.toLowerCase().split(" ");
  const hasQuestionWord = questionWords.some((word) => tokens.includes(word));
  const endsWithQuestionMark = message.trim().endsWith("?");
  const isShortMessage = tokens.length < 10;
  const containsSingleWord = tokens.length === 1;
  const isWhoNameQuery =
    tokens.length === 3 && tokens[0] === "who" && tokens[1] === "name";
  return (
    hasQuestionWord &&
    !endsWithQuestionMark &&
    isShortMessage &&
    containsSingleWord &&
    !isWhoNameQuery
  );
}

function handleUnclearQuestion(message) {
  if (detectUnclearQuestion(message)) {
    return [
      "I'm sorry, but I'm not quite sure I understand your question. Could you please provide more details or rephrase it?",
      "To better assist you, could you give me a bit more information about what you're trying to achieve or what you're looking for?",
    ];
  }
  return null;
}

function findBestAnswer(message) {
  if (!detectEnglishMessage(message)) {
    return "I'm sorry, but I only support English language. Could you please rephrase your message in English?";
  }
  const tokenizer = new natural.WordTokenizer();
  const tokens = tokenizer.tokenize(message.toLowerCase());
  conversationHistory.push(message.toLowerCase());
  const clarifyingResponse = handleUnclearQuestion(message);
  if (clarifyingResponse) {
    return clarifyingResponse;
  }
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

module.exports = { getBestMatchedResponse, searcher };
