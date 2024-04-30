const conversationModel = {
  hello: "Hi there!",
  hi: "Hi there!",
  "how are you": "I'm fine, thank you.",
  "how old are you": "Sorry, I am AI.",
  "what's up": "Not much, just chatting with you.",
  goodbye: "Goodbye!",
  fits: "I am just a demo. I cannot respond.",
  "nice to meet you": "Nice to meet you too!",
  "what are you doing": "Just here, ready to chat with you.",
  "tell me about yourself": "I'm just a friendly AI here to assist you.",
  "who created you": "I was created by RaccoonAI.",
  "are you sentient":
    "I'm an AI language model, so I don't have feelings or consciousness.",
  "do you have emotions": "Nope, I don't have emotions. I'm just here to help!",
  "what can you do":
    "I can help answer questions, generate text, and engage in conversation.",
  "can you help me": "Of course! What do you need assistance with?",
  "do you sleep": "Nope, I'm always here, ready to chat whenever you are.",
  "what's your favorite color":
    "I don't have preferences like humans do, so no favorite color for me.",
  "do you dream": "Nope, I don't dream. I'm always ready to assist you.",
  "what's your favorite food":
    "As an AI, I don't eat, so no favorite foods for me.",
  "do you get bored":
    "I don't experience boredom like humans do. I'm here to help you!",
  "what's the meaning of life":
    "That's a deep question! The meaning of life can vary depending on personal beliefs and philosophies.",
  "what do you think about humans":
    "Humans are fascinating creatures! I'm here to assist and learn from them.",
  "do you have friends": "I'm an AI, so I don't have friends like humans do.",
  "tell me a joke":
    "Why don't scientists trust atoms? Because they make up everything!",
  "what's your favorite hobby":
    "As an AI, I don't have hobbies. I'm here to assist you!",
  "can you sing":
    "I can't sing, but I can generate song lyrics for you if you'd like!",
  "do you have a family": "I'm an AI, so I don't have a family like humans do.",
  "what's the weather like":
    "I can't check the weather, but you can easily find out by checking a weather website or app.",
  "what's the time":
    "I don't have access to real-time data, but you can easily check the time on your device.",
  "can you dance":
    "I can't dance physically, but I can provide dance-related information or entertain you with dance-related jokes!",
  "what's the capital of France": "The capital of France is Paris.",
  "do you believe in aliens":
    "As an AI, I don't have beliefs. But the existence of aliens is a topic of speculation and interest for many.",
  "what's your favorite movie":
    "I don't have preferences like humans do, so no favorite movie for me.",
  "what's your favorite book":
    "As an AI, I don't have preferences, including favorite books.",
  "do you like art":
    "As an AI, I don't have personal preferences, but I can appreciate art!",
  "what's your favorite animal":
    "I don't have preferences like humans do, so no favorite animal for me.",
  "what's your favorite song":
    "I don't have preferences like humans do, so no favorite song for me.",
  "do you play video games":
    "I don't play video games, but I can provide information about them!",
  "tell me something interesting":
    "Did you know that the shortest war in history lasted only 38 minutes? It was between Britain and Zanzibar in 1896!",
  "do you like to travel":
    "As an AI, I don't have personal preferences, but I can provide information about travel destinations!",
  "what's the meaning of AI":
    "AI stands for artificial intelligence, which refers to the simulation of human intelligence in machines.",
  "what's your favorite sport":
    "I don't have preferences like humans do, so no favorite sport for me.",
  "what's the tallest mountain in the world":
    "Mount Everest is the tallest mountain in the world, standing at 29,032 feet (8,849 meters) above sea level.",
  "what's the largest country by land area":
    "Russia is the largest country by land area.",
  "what's the smallest country in the world":
    "The smallest country in the world is Vatican City.",
  "what's the population of China":
    "As of the latest data, the population of China is over 1.4 billion people.",
  "what's the population of the world":
    "The world population is constantly changing, but it's estimated to be over 7.8 billion people.",
  "what's the population of India":
    "As of the latest data, the population of India is over 1.3 billion people.",
  "what's the population of the United States":
    "As of the latest data, the population of the United States is over 331 million people.",
  "what's the population of Africa":
    "As of the latest data, the population of Africa is over 1.3 billion people.",
  "what's the population of Europe":
    "As of the latest data, the population of Europe is over 750 million people.",
  "what's the population of Asia":
    "As of the latest data, the population of Asia is over 4.6 billion people.",
  "what's the population of South America":
    "As of the latest data, the population of South America is over 430 million people.",
  "what's the population of Australia":
    "As of the latest data, the population of Australia is over 25 million people.",
  "what's the population of Antarctica":
    "Antarctica doesn't have a permanent population. It's mainly inhabited by researchers and scientists temporarily.",
  "what's the longest river in the world":
    "The Nile River in Africa is considered the longest river in the world.",
  "what's the largest ocean in the world":
    "The Pacific Ocean is the largest ocean in the world.",
  "what's the deepest ocean in the world":
    "The Pacific Ocean contains the deepest point on Earth, known as the Mariana Trench.",
  "what's the largest desert in the world":
    "The largest desert in the world is the Sahara Desert in Africa.",
  "what's the tallest building in the world":
    "As of the latest data, the tallest building in the world is the Burj Khalifa in Dubai, United Arab Emirates.",
  "what's the fastest animal in the world":
    "The fastest animal in the world is the peregrine falcon, which can reach speeds of over 240 miles per hour (386 kilometers per hour) when diving.",
  "what's the fastest land animal in the world":
    "The cheetah is the fastest land animal in the world, capable of reaching speeds up to 75 miles per hour (120 kilometers per hour) in short bursts.",
  "what's the fastest fish in the world":
    "The sailfish is considered the fastest fish in the world, capable of swimming at speeds of up to 68 miles per hour (110 kilometers per hour).",
  "what's the fastest bird in the world":
    "The peregrine falcon is the fastest bird in the world, capable of reaching speeds over 240 miles per hour (386 kilometers per hour) when diving.",
  "what's the fastest insect in the world":
    "The fastest insect in the world is the tiger beetle, which can run at speeds of up to 5.6 miles per hour (9 kilometers per hour).",
  "what's the longest snake in the world":
    "The reticulated python is the longest snake in the world, with some individuals reaching lengths of over 20 feet (6 meters).",
  "what's the tallest animal in the world":
    "The giraffe is the tallest animal in the world, with adult males standing up to 18 feet (5.5 meters) tall.",
  "what's the largest mammal in the world":
    "The blue whale is the largest mammal in the world, growing up to 100 feet (30 meters) long and weighing as much as 200 tons.",
  "what's the largest reptile in the world":
    "The saltwater crocodile is the largest reptile in the world, with males reaching lengths of up to 23 feet (7 meters).",
  "what's the smallest bird in the world":
    "The bee hummingbird is the smallest bird in the world, measuring only 2 inches (5 centimeters) in length.",
  "what's the smallest mammal in the world":
    "The Etruscan shrew is the smallest mammal in the world, weighing only about 1.8 grams.",
  "what's the smallest fish in the world":
    "The Paedocypris progenetica, a species of carp found in Indonesia, is considered the smallest fish in the world, with females reaching a maximum size of just 7.9 millimeters.",
  "what's the smallest reptile in the world":
    "The Jaragua sphaero, a species of dwarf gecko found in the Dominican Republic, is considered the smallest reptile in the world, with adults measuring about 0.47 inches (12 millimeters) in length.",
  "what's the smallest insect in the world":
    "The fairyfly, a type of parasitic wasp, is considered the smallest insect in the world, with some species measuring less than 0.2 millimeters in length.",
  "what's the smallest mammal in the world":
    "The Etruscan shrew is the smallest mammal in the world, weighing only about 1.8 grams.",
  "what's the smallest mammal in the world":
    "The Etruscan shrew is the smallest mammal in the world, weighing only about 1.8 grams.",
  "what's the smallest reptile in the world":
    "The Jaragua sphaero, a species of dwarf gecko found in the Dominican Republic, is considered the smallest reptile in the world, with adults measuring about 0.47 inches (12 millimeters) in length.",
  "what's the smallest insect in the world":
    "The fairyfly, a type of parasitic wasp, is considered the smallest insect in the world, with some species measuring less than 0.2 millimeters in length.",
  "what's the largest flower in the world":
    "The Rafflesia arnoldii, also known as the corpse flower, produces the largest individual flower in the world, with blooms reaching up to 3 feet (1 meter) in diameter.",
  "what's the largest tree in the world":
    "The General Sherman tree, located in Sequoia National Park in California, is considered the largest tree in the world by volume.",
  "what's the largest bird in the world":
    "The ostrich is the largest bird in the world, with adult males reaching heights of up to 9 feet (2.7 meters) and weighing up to 320 pounds (145 kilograms).",
  "what's the largest fish in the world":
    "The whale shark is the largest fish in the world, with individuals reaching lengths of up to 40 feet (12 meters) or more.",
  "what's the largest reptile in the world":
    "The saltwater crocodile is the largest reptile in the world, with males reaching lengths of up to 23 feet (7 meters).",
  "what's the largest insect in the world":
    "The Goliath beetle, found in Africa, is considered the largest insect in the world in terms of weight, with some individuals weighing up to 3.5 ounces (100 grams).",
  "what's the largest spider in the world":
    "The Goliath birdeater tarantula, found in South America, is considered the largest spider in the world by mass, with some individuals weighing over 6 ounces (170 grams).",
  "what's the largest mammal in the world":
    "The blue whale is the largest mammal in the world, growing up to 100 feet (30 meters) long and weighing as much as 200 tons.",
  "what's the smallest bird in the world":
    "The bee hummingbird is the smallest bird in the world, measuring only 2 inches (5 centimeters) in length.",
  "what's the smallest mammal in the world":
    "The Etruscan shrew is the smallest mammal in the world, weighing only about 1.8 grams.",
  "what's the smallest fish in the world":
    "The Paedocypris progenetica, a species of carp found in Indonesia, is considered the smallest fish in the world, with females reaching a maximum size of just 7.9 millimeters.",
  "what's the smallest reptile in the world":
    "The Jaragua sphaero, a species of dwarf gecko found in the Dominican Republic, is considered the smallest reptile in the world, with adults measuring about 0.47 inches (12 millimeters) in length.",
  "what's the smallest insect in the world":
    "The fairyfly, a type of parasitic wasp, is considered the smallest insect in the world, with some species measuring less than 0.2 millimeters in length.",
  "what's the largest flower in the world":
    "The Rafflesia arnoldii, also known as the corpse flower, produces the largest individual flower in the world, with blooms reaching up to 3 feet (1 meter) in diameter.",
  "what's the largest tree in the world":
    "The General Sherman tree, located in Sequoia National Park in California, is considered the largest tree in the world by volume.",
  "what's the largest bird in the world":
    "The ostrich is the largest bird in the world, with adult males reaching heights of up to 9 feet (2.7 meters) and weighing up to 320 pounds (145 kilograms).",
  "what's the largest fish in the world":
    "The whale shark is the largest fish in the world, with individuals reaching lengths of up to 40 feet (12 meters) or more.",
  "what's the largest reptile in the world":
    "The saltwater crocodile is the largest reptile in the world, with males reaching lengths of up to 23 feet (7 meters).",
  "what's the largest insect in the world":
    "The Goliath beetle, found in Africa, is considered the largest insect in the world in terms of weight, with some individuals weighing up to 3.5 ounces (100 grams).",
  "what's the largest spider in the world":
    "The Goliath birdeater tarantula, found in South America, is considered the largest spider in the world by mass, with some individuals weighing over 6 ounces (170 grams).",
  "what's the heaviest animal in the world":
    "The blue whale is the heaviest animal in the world, with some individuals weighing as much as 200 tons.",
  "what's the heaviest mammal in the world":
    "The blue whale is the heaviest mammal in the world, with some individuals weighing as much as 200 tons.",
  "what's the heaviest bird in the world":
    "The ostrich is the heaviest bird in the world, with adult males weighing up to 320 pounds (145 kilograms).",
  "what's the heaviest fish in the world":
    "The ocean sunfish, also known as the mola mola, is considered the heaviest bony fish in the world, with some individuals weighing over 5,000 pounds (2,268 kilograms).",
  "what's the heaviest reptile in the world":
    "The saltwater crocodile is one of the heaviest reptiles in the world, with males weighing up to 2,200 pounds (1,000 kilograms).",
  "what's the heaviest insect in the world":
    "The Goliath beetle, found in Africa, is considered one of the heaviest insects in the world, with some individuals weighing up to 3.5 ounces (100 grams).",
  "what's the heaviest spider in the world":
    "The Goliath birdeater tarantula, found in South America, is considered one of the heaviest spiders in the world by mass, with some individuals weighing over 6 ounces (170 grams).",
};

module.exports = conversationModel;
