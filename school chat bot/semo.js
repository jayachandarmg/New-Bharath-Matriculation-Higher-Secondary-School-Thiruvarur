// School Info Data
const schoolName = "New Bharath Matriculation Higher Secondary School";
const schoolContact = "📞 Phone: 9876543210 | 📧 Email: newbharathschool@gmail.com";
const schoolPrincipal = "👨‍🏫 Principal: Dr. N.Muralidhran ";
const schoolLocation = "📍 New Street, Thiruvarur Main Road, Tamil Nadu";
const schoolMedium = "📝 Medium: English  Medium";
const schoolTimings = "🕒 9:00 AM – 4:20 PM";

// Admission docs
const admissionDocs = [
  "📄 Birth Certificate",
  "📄 Transfer Certificate (if applicable)",
  "📄 Community Certificate",
  "📄 Aadhar Card",
  "📸 Passport Size Photos"
];

// Fees (KG to 12)
const fees = {
  LKG: "₹15,000 / year",
  UKG: "₹20,000 / year",
  I: "₹25,000 / year",
  II: "₹30,000 / year",
  III: "₹35,000 / year",
  IV: "₹40,000 / year",
  V: "₹45,000 / year",
  VI: "₹50,000 / year",
  VII: "₹55,000 / year",
  VIII: "₹60,000 / year",
  IX: "₹65,000 / year",
  X: "₹70,000 / year",
  XI: "₹75,000 / year",
  XII: "₹80,000 / year"
};

// Groups for 11th
const groups11 = [
  "📘 Group 1: Tamil, English , Maths, Physics, Chemistry, Biology",
  "💻 Group 2: Tamil, English , Maths, Physics, Chemistry, Computer Science",
  "📊 Group 3: Tamil, English , Commerce, Accountancy, Economics, Computer Application ",
  "🖥 Group 4: Tamil, English , Maths, Automobile Theory , Automobile Practical , Employability Skills "
];

// Toppers
const sslcToppers = [
  "1st Rank – 495/500",
  " 2nd Rank – 490/500",
  " 3rd Rank – 485/500"
];

const hscToppers = [
  "1st Rank – 562/600",
  " 2nd Rank – 559/600",
  " 3rd Rank – 532/600"
];

// Facilities
const sportsFacilities = ["⚽ Football", "🏏 Cricket", "🏀 Basketball", "🏃 Athletics", "🏐 Volleyball"];
const waterFacilities = "💧 Pure RO drinking water in all blocks.";
const cycleStand = "🚲 Yes, we have a safe cycle stand.";
const auditorium = "🎭 Yes, we have a large auditorium.";
const canteen = "🍴 Sorry,our school doesn't have a canteen available. ";
const library = "📚 A library with 5000+ books & digital resources.";

// Bot Reply Logic
function getBotReply(text) {
  text = text.toLowerCase();
  let reply = "🤔 Sorry, I didn’t understand. Try asking about admission, fees, timings, bus, toppers, facilities, etc.";

  if (text.includes("help") || text.includes("what can") || text.includes("options"))
    reply = "💡 I can help you with: Admissions, Fees, Timings, Groups, Toppers, Facilities (sports, water, auditorium, cycle stand, canteen, library), Bus info, and Contact details.";

  else if (text.includes("admission") || text.includes("apply") || text.includes("join"))
    reply = `📚 Admission Info:\n- ${admissionDocs.join("\n- ")}\n${schoolContact}`;

  else if (text.includes("fee") || text.includes("fees") || text.includes("payment"))
    reply = "💰 Fees per class:\n" + Object.entries(fees).map(([cls,f])=>`Class ${cls}: ${f}`).join("\n");

  else if (text.includes("time") || text.includes("timing") || text.includes("hours"))
    reply = schoolTimings;

  else if (text.includes("contact") || text.includes("phone") || text.includes("email"))
    reply = schoolContact;

  else if (text.includes("principal"))
    reply = schoolPrincipal;

  else if (text.includes("location") || text.includes("address"))
    reply = schoolLocation;

  else if (text.includes("medium") || text.includes("language"))
    reply = schoolMedium;

  else if (text.includes("11") && text.includes("group"))
    reply = "📖 11th Standard Groups:\n" + groups11.join("\n");

  else if (text.includes("sslc") || text.includes("10th"))
    reply = "🏆 Last year SSLC Toppers:\n" + sslcToppers.join("\n");

  else if (text.includes("hsc") || text.includes("12th"))
    reply = "🏆 Last year HSC Toppers:\n" + hscToppers.join("\n");

  else if (text.includes("sport") || text.includes("games"))
    reply = "⚽ Sports Facilities:\n" + sportsFacilities.join("\n");

  else if (text.includes("water"))
    reply = waterFacilities;

  else if (text.includes("cycle"))
    reply = cycleStand;

  else if (text.includes("auditorium") || text.includes("hall"))
    reply = auditorium;

  else if (text.includes("canteen") || text.includes("food"))
    reply = canteen;

  else if (text.includes("library") || text.includes("books"))
    reply = library;

  else if (text.includes("bus") || text.includes("transport") || text.includes("van"))
    reply = "🚌 Sorry, no bus facility is available.";

  else if (text.includes("competition") || text.includes("contest") || text.includes("event"))
    reply = "🏆 We conduct inter-house & inter-school competitions in academics, sports & cultural events.";

  return reply;
}

// Chat Functionality
function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  const chatBox = document.getElementById("chat-box");

  // User message
  const userMsg = document.createElement("div");
  userMsg.classList.add("message", "user-message");
  userMsg.innerText = message;
  chatBox.appendChild(userMsg);

  // Bot reply
  const botMsg = document.createElement("div");
  botMsg.classList.add("message", "bot-message");
  botMsg.innerText = getBotReply(message);
  chatBox.appendChild(botMsg);

  chatBox.scrollTop = chatBox.scrollHeight;
  input.value = "";
}

// ✅ Welcome message on load
window.onload = function() {
  const chatBox = document.getElementById("chat-box");
  const botMsg = document.createElement("div");
  botMsg.classList.add("message", "bot-message");
  botMsg.innerText = "👋 Hello! I’m your assistant from New Bharath Matriculation Higher Secondary School.\nAsk me about admissions, fees, facilities, toppers, competitions, and more!";
  botMsg.style.fontWeight="bold";
  chatBox.appendChild(botMsg);
};
