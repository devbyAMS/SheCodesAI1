function showAnswer(response) {
  alert(response.data.answer);
}

let apiKey = "b8bac409foc24c511t14abf5300b7242";
let prompt = "What is the capital city of Spain";
let context = "Make sure to provide a clear and precise answer";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showAnswer);
console.log(hi);
