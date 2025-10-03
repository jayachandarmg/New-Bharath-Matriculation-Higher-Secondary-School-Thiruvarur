// ---------- School Info Data ----------
const schoolName = "New Bharath Matriculation Higher Secondary School";
const schoolContact = "📞 Phone: 9876543210 | 📧 Email: newbharathschool@gmail.com";
const schoolPrincipal = "👨‍🏫 Principal: Dr. N.Muralidhran ";
const schoolLocation = "📍 New Street, Thiruvarur Main Road, Tamil Nadu";
const schoolMedium = "📝 Medium: English  Medium";
const schoolTimings = "🕒 9:00 AM – 4:20 PM";

const admissionDocs = [
  "📄 Birth Certificate",
  "📄 Transfer Certificate (if applicable)",
  "📄 Community Certificate",
  "📄 Aadhar Card",
  "📸 Passport Size Photos"
];

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

const groups11 = [
  "📘 Group 1: Tamil, English , Maths, Physics, Chemistry, Biology",
  "💻 Group 2: Tamil, English , Maths, Physics, Chemistry, Computer Science",
  "📊 Group 3: Tamil, English , Commerce, Accountancy, Economics, Computer Application ",
  "🖥 Group 4: Tamil, English , Maths, Automobile Theory , Automobile Practical , Employability Skills "
];

const sslcToppers = [
  "1st Rank – 495/500",
  "2nd Rank – 490/500",
  "3rd Rank – 485/500"
];

const hscToppers = [
  "1st Rank – 562/600",
  "2nd Rank – 559/600",
  "3rd Rank – 532/600"
];

const sportsFacilities = ["⚽ Football", "🏏 Cricket", "🏀 Basketball", "🏃 Athletics", "🏐 Volleyball"];
const waterFacilities = "💧 Pure RO drinking water in all blocks.";
const cycleStand = "🚲 Safe cycle stand available.";
const auditorium = "🎭 Large auditorium for events.";
const canteen = "🍴 No canteen facility available.";
const library = "📚 Library with 5000+ books & digital resources.";

// ---------- Helper: detect greetings safely ----------
function isGreeting(text) {
  return /\b(?:hi|hii|hello|hey|hey there|hi there|hello bot|hi bot|hey bot|good morning|good afternoon|good evening)\b/i.test(text);
}

// ---------- Bot reply logic ----------
function getBotReply(rawText) {
  const text = rawText.toLowerCase().trim();

  if (isGreeting(text)) {
    const greetings = [
      "👋 <b>Hello! How can I help you?</b>",
      "👋 <b>Hi! How can I assist you today?</b>",
      "🤖 <b>Hello! Ask me about admissions, fees, facilities, competitions, and more!</b>"
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  if (text.includes("help") || text.includes("what can") || text.includes("options") || text.includes("how can you help") || text.includes("how can i help")) {
    return "<b>💡 I can help you with: Admissions, Fees, Timings, Groups, Toppers, Facilities (sports, water, auditorium, cycle stand, canteen, library), Bus info, and Contact details.</b>";
  }

  if (text.includes("admission") || text.includes("apply") || text.includes("join")) {
    return `<b>📚 Admission Info:</b><br>- ${admissionDocs.join("<br>- ")}<br><br><b>${schoolContact}</b>`;
  }

  if (text.includes("fee") || text.includes("fees") || text.includes("payment")) {
    return "<b>💰 Fees per class:</b><br>" + Object.entries(fees).map(([cls,f])=>`Class ${cls}: ${f}`).join("<br>");
  }

  if (text.includes("time") || text.includes("timing") || text.includes("hours")) {
    return `<b>${schoolTimings}</b>`;
  }

  if (text.includes("contact") || text.includes("phone") || text.includes("email")) {
    return `<b>${schoolContact}</b>`;
  }

  if (text.includes("principal")) {
    return `<b>${schoolPrincipal}</b>`;
  }
 
  if (text.includes("school name") || text.includes("name of the school")) {
    return `<b>${schoolName}</b>`;
  }

  if (text.includes("location") || text.includes("address")) {
    return `<b>${schoolLocation}</b>`;
  }

  if (text.includes("medium") || text.includes("language")) {
    return `<b>${schoolMedium}</b>`;
  }

  if (text.includes("11") && text.includes("group")) {
    return "<b>📖 11th Standard Groups:</b><br>" + groups11.join("<br>");
  }

  if (text.includes("sslc") || text.includes("10th")) {
    return "<b>🏆 Last year SSLC Toppers:</b><br>" + sslcToppers.join("<br>");
  }

  if (text.includes("hsc") || text.includes("12th")) {
    return "<b>🏆 Last year HSC Toppers:</b><br>" + hscToppers.join("<br>");
  }

  // ---------- New: All facilities with bold headings ----------
  if (text.includes("facility") || text.includes("facilities")) {
    return `<b>🏫 School Facilities:</b><br>
    <b>⚽ Sports:</b><br>${sportsFacilities.join("<br>")}<br><br>
    <b>💧 Water:</b><br>${waterFacilities}<br><br>
    <b>🚲 Cycle Stand:</b><br>${cycleStand}<br><br>
    <b>🎭 Auditorium:</b><br>${auditorium}<br><br>
    <b>🍴 Canteen:</b><br>${canteen}<br><br>
    <b>📚 Library:</b><br>${library}`;
  }

  // Individual facility checks (kept for backward compatibility)
  if (text.includes("sport") || text.includes("games")) {
    return "<b>⚽ Sports Facilities:</b><br>" + sportsFacilities.join("<br>");
  }

  if (text.includes("water")) {
    return `<b>${waterFacilities}</b>`;
  }

  if (text.includes("cycle")) {
    return `<b>${cycleStand}</b>`;
  }

  if (text.includes("auditorium") || text.includes("hall")) {
    return `<b>${auditorium}</b>`;
  }

  if (text.includes("canteen") || text.includes("food")) {
    return `<b>${canteen}</b>`;
  }

  if (text.includes("library") || text.includes("books")) {
    return `<b>${library}</b>`;
  }

  if (text.includes("bus") || text.includes("transport") || text.includes("van")) {
    return "<b>🚌 Sorry, no bus facility is available.</b>";
  }

  if (text.includes("competition") || text.includes("contest") || text.includes("event")) {
    return "<b>🏆 We conduct inter-house & inter-school competitions in academics, sports & cultural events.</b>";
  }

  return "🤔 <b>Sorry, I didn’t understand. Try asking about admission, fees, timings, bus, toppers, facilities, etc.</b>";
}

// ---------- Chat UI ----------
function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  const chatBox = document.getElementById("chat-box");

  const userMsg = document.createElement("div");
  userMsg.classList.add("message", "user-message");
  userMsg.textContent = message;
  chatBox.appendChild(userMsg);

  const botMsg = document.createElement("div");
  botMsg.classList.add("message", "bot-message");
  botMsg.innerHTML = getBotReply(message);
  chatBox.appendChild(botMsg);

  chatBox.scrollTop = chatBox.scrollHeight;
  input.value = "";
  input.focus();
}

// welcome message on load
window.onload = function() {
  const chatBox = document.getElementById("chat-box");
  const welcome = [
    "👋 <b>Hello! I’m your assistant from New Bharath Matriculation Higher Secondary School.<br>How can I help you?</b>",
    "🎓 <b>Welcome! Ask me about admissions, fees, facilities, competitions, and more!</b>"
  ];
  const botMsg = document.createElement("div");
  botMsg.classList.add("message", "bot-message");
  botMsg.innerHTML = welcome[Math.floor(Math.random() * welcome.length)];
  chatBox.appendChild(botMsg);
};

// send on Enter key
document.getElementById('user-input').addEventListener('keydown', function(e){
  if (e.key === 'Enter') sendMessage();
});
