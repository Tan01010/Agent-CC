const {
  Client,
  GatewayIntentBits,
  REST,
  Routes,
  SlashCommandBuilder,
  EmbedBuilder,
} = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const serviceDocs = {
  "Node.js": "https://nodejs.org/en/docs/",
  Express: "https://expressjs.com/en/starter/installing.html",
  MongoDB: "https://www.mongodb.com/docs/",
  React: "https://reactjs.org/docs/getting-started.html",
  Vue: "https://v3.vuejs.org/guide/introduction.html",
  Angular: "https://angular.io/docs",
  Python: "https://docs.python.org/3/",
  Django: "https://docs.djangoproject.com/en/stable/",
  Laravel: "https://laravel.com/docs",
  Java: "https://docs.oracle.com/en/java/",
  "Ruby on Rails": "https://guides.rubyonrails.org/",
  Flutter: "https://flutter.dev/docs",
  "Spring Boot":
    "https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/",
};
const exampleSnippets = {
  variables: `// Example of Variable Declaration
let name = 'John Doe';  // String variable
const age = 30;  // Constant variable
let isActive = true;  // Boolean variable`,

  "data types": `// Example of Data Types
let number = 10;  // Number
let text = 'Hello, world!';  // String
let isActive = true;  // Boolean`,

  functions: `// Example of Functions
function greet(name) {
  return 'Hello, ' + name;
}
console.log(greet('John'));  // Output: Hello, John`,

  loops: `// Example of Loops
for (let i = 0; i < 5; i++) {
  console.log(i);  // Output: 0, 1, 2, 3, 4
}
  
let i = 0;
while (i < 5) {
  console.log(i);  // Output: 0, 1, 2, 3, 4
  i++;
}`,

  conditionals: `// Example of Conditionals
let x = 10;
if (x > 5) {
  console.log('x is greater than 5');
} else {
  console.log('x is less than or equal to 5');
}`,

  arrays: `// Example of Arrays
let fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits[0]);  // Output: Apple`,

  objects: `// Example of Objects
let person = {
  name: 'John',
  age: 30,
  greet: function() {
    return 'Hello, ' + this.name;
  }
};
console.log(person.greet());  // Output: Hello, John`,

  classes: `// Example of Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return 'Hello, ' + this.name;
  }
}
let person = new Person('John', 30);
console.log(person.greet());  // Output: Hello, John`,
};
const motivationalQuotes = [
  "Programs must be written for people to read, and only incidentally for machines to execute. – Harold Abelson",
  "Talk is cheap. Show me the code. – Linus Torvalds",
  "Truth can only be found in one place: the code. – Robert C. Martin",
  "The only way to learn a new programming language is by writing programs in it. – Dennis Ritchie",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler",
  "First, solve the problem. Then, write the code. – John Johnson",
  "Experience is the name everyone gives to their mistakes. – Oscar Wilde",
  "In order to be irreplaceable, one must always be different. – Coco Chanel",
  "Java is to JavaScript what car is to Carpet. – Chris Heilmann",
  "Knowledge is power. – Francis Bacon",
  "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. – Dan Salomon",
  "Code is like humor. When you have to explain it, it’s bad. – Cory House",
  "Fix the cause, not the symptom. – Steve Maguire",
  "Optimism is an occupational hazard of programming: feedback is the treatment. – Kent Beck",
  "When to use iterative development? You should use iterative development only on projects that you want to succeed. – Martin Fowler",
  "Simplicity is the soul of efficiency. – Austin Freeman",
  "Before software can be reusable it first has to be usable. – Ralph Johnson",
  "Make it work, make it right, make it fast. – Kent Beck",
  "Any sufficiently advanced bug is indistinguishable from a feature. – Rich Kulawiec",
  "If you think it's simple, then you have misunderstood the problem. – Bjarne Stroustrup",
  "Programming isn't about what you know; it's about what you can figure out. – Chris Pine",
  "The best error message is the one that never shows up. – Thomas Fuchs",
  "Software undergoes beta testing shortly before it’s released. Beta is Latin for 'still doesn’t work.' – Unknown",
  "If debugging is the process of removing bugs, then programming must be the process of putting them in. – Edsger Dijkstra",
  "You can’t have great software without a great team. – Joel Spolsky",
  "If you automate a mess, you get an automated mess. – Rod Michael",
  "A good programmer looks both ways before crossing a one-way street. – Doug Linder",
  "Simplicity is prerequisite for reliability. – Edsger Dijkstra",
  "Computers are fast; programmers keep it slow. – Unknown",
  "Code never lies, comments sometimes do. – Ron Jeffries",
  "Programming is not easy like Sunday morning, it’s silent like Saturday night. – Unknown",
  "Deleted code is debugged code. – Jeff Sickel",
  "Testing leads to failure, and failure leads to understanding. – Burt Rutan",
  "A user interface is like a joke. If you have to explain it, it's not that good. – Martin LeBlanc",
  "The best thing about a boolean is even if you are wrong, you are only off by a bit. – Unknown",
  "Software is a gas; it expands to fill its container. – Nathan Myhrvold",
  "Programming is the art of algorithm design and the craft of debugging errant code. – Ellen Ullman",
  "Walking on water and developing software from a specification are easy if both are frozen. – Edward V. Berard",
  "Sometimes the elegant implementation is just a function. Not a method. Not a class. Not a framework. Just a function. – John Carmack",
  "Programming is thinking, not typing. – Casey Patton",
  "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime. – Muhammad Waseem",
  "Code as if the next person to maintain your code is a psychopath who knows where you live. – John Woods",
  "The function of good software is to make the complex appear to be simple. – Grady Booch",
  "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late. – Seymour Cray",
  "A good programmer is someone who always looks both ways before crossing a one-way street. – Doug Linder",
  "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. – Martin Golding",
  "Good code is its own best documentation. – Steve McConnell",
  "Programs are meant to be read by humans and only incidentally for computers to execute. – Donald Knuth",
  "Programming is like writing a book… except if you miss a single comma on page 126 the whole thing makes no sense. – Unknown",
  "The best programmers are not marginally better than merely good ones. They are an order-of-magnitude better. – Randall E. Stross",
  "When you feel the need to write a comment, first try to refactor the code so that any comment becomes superfluous. – Kent Beck",
  "Don’t comment bad code — rewrite it. – Brian Kernighan",
  "Even the best planning is not so omniscient as to get it right the first time. – Fred Brooks",
  "Coding is not just code, that is a live thing to serve everyone! – Ming Song",
  "Programming can be fun, so can cryptography; however, they should not be combined. – Kreitzberg and Shneiderman",
  "If you learn how to write software, you can create virtual universes. – Lex Fridman",
  "Everyone should learn how to code. It teaches you how to think. – Steve Jobs",
  "A language that doesn’t affect the way you think about programming is not worth knowing. – Alan Perlis",
  "Fast, good, cheap: pick any two. – Unknown",
  "You miss 100% of the bugs you don’t test. – Unknown",
  "Without requirements or design, programming is the art of adding bugs to an empty text file. – Louis Srygley",
  "Code without tests is broken by design. – Jacob Kaplan-Moss",
  "Fail fast. Fix faster. – Unknown",
  "Hard things are hard. Deal with it. – Unknown",
  "Programming is 10% writing code and 90% figuring out why it’s not working. – Unknown",
  "No matter which field you’re in, learning to program will change your life. – Drew Houston",
  "Readability counts. – The Zen of Python",
  "There is always one more bug to fix. – Ellen Ullman",
  "Code should be written to minimize the time it would take for someone else to understand it. – Robert C. Martin",
  "Beautiful code is short and sweet. – John Carmack",
  "Code is like poetry; it has to make sense and have rhythm. – Unknown",
  "In programming the hard part isn’t solving problems, but deciding what problems to solve. – Paul Graham",
  "Coding is today's literacy. – Unknown",
  "Software development is a marathon, not a sprint. – Unknown",
  "You don’t need to know everything. You just need to be resourceful. – Unknown",
  "Discipline equals freedom. – Jocko Willink",
  "If you want to be a good coder, you have to code a lot. – Unknown",
  "The way to learn to program is by writing programs. – Brian Kernighan",
  "Great software is the result of great habits. – Unknown",
  "Start small. Think big. Scale fast. – Unknown",
  "Practice doesn’t make perfect. Perfect practice makes perfect. – Vince Lombardi",
  "Errors are a sign you’re pushing your limits. – Unknown",
  "Learning to write programs stretches your mind. – Bill Gates",
  "Success is the sum of small efforts, repeated day in and day out. – Robert Collier",
  "You are never too old to learn something new. – Unknown",
  "Push yourself, because no one else is going to do it for you. – Unknown",
  "Stop wishing. Start doing. – Unknown",
  "Consistency is the key to mastery. – Unknown",
  "Be stubborn on vision, but flexible on details. – Jeff Bezos",
  "Persistence guarantees that results are inevitable. – Paramahansa Yogananda",
  "Just keep coding. – Unknown",
  "It always seems impossible until it’s done. – Nelson Mandela",
  "Motivation gets you going. Discipline keeps you growing. – John C. Maxwell",
  "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
  "The best way to predict the future is to invent it. – Alan Kay",
];

const allCommands = [
  { commandName1: "ping", description: "Replies with Pong!", execute: ping },
  {
    commandName1: "troubleshoot",
    description: "Search Common Error Database for solution",
    options: [
      {
        type: "string",
        name: "error",
        description: "Error message to troubleshoot",
        required: true,
        choices: [
          { name: "SyntaxError", value: "SyntaxError" },
          { name: "TypeError", value: "TypeError" },
          { name: "ReferenceError", value: "ReferenceError" },
          { name: "RangeError", value: "RangeError" },
          { name: "TS2345", value: "TS2345" }, // Type mismatch
          { name: "TS2304", value: "TS2304" }, // Cannot find name
          { name: "TS1005", value: "TS1005" }, // Missing ; or )
          { name: "NameError", value: "NameError" },
          { name: "ValueError", value: "ValueError" },
          { name: "IndexError", value: "IndexError" },
          { name: "KeyError", value: "KeyError" },
          { name: "ImportError", value: "ImportError" },
          { name: "ModuleNotFoundError", value: "ModuleNotFoundError" },
          { name: "IndentationError", value: "IndentationError" },
          { name: "NullPointerException", value: "NullPointerException" },
          { name: "ClassNotFoundException", value: "ClassNotFoundException" },
          {
            name: "IllegalArgumentException",
            value: "IllegalArgumentException",
          },
          { name: "ArithmeticException", value: "ArithmeticException" },
          { name: "SegmentationFault", value: "SegmentationFault" },
          { name: "LinkerError", value: "LinkerError" },
          { name: "CompilationError", value: "CompilationError" },
          { name: "UndefinedBehavior", value: "UndefinedBehavior" },
          { name: "RustTypeMismatch", value: "RustTypeMismatch" },
          { name: "CSSSyntaxError", value: "CSSSyntaxError" },
          { name: "UnknownAtRule", value: "UnknownAtRule" },
        ],
      },
    ],
    execute: troubleshoot,
  },
  { commandName1: "help", description: "Get help with the bot", execute: help }, // Placeholder for help command
  {
    commandName1: "info",
    description: "Get info about the bot",
    options: [
      {
        type: "string",
        name: "from",
        description: "Information to retrieve",
        required: true,
        choices: [
          { name: "Server", value: "server" },
          { name: "User", value: "user" },
          { name: "Bot", value: "bot" },
        ],
      },
    ],
    execute: info,
  },
  {
    commandName1: "package",
    description: "Get info about a package from a package registry",
    options: [
      {
        type: "string",
        name: "name",
        description: "The name of the package",
        required: true,
      },
      {
        type: "string",
        name: "source",
        description: "The package registry",
        required: true,
        choices: [
          { name: "npm", value: "npm" },
          { name: "PyPI", value: "pypi" },
          { name: "crates.io", value: "crates" },
          { name: "RubyGems", value: "rubygems" },
        ],
      },
    ],
    execute: packageInfo,
  },
  {
    commandName1: "motivate",
    description: "Get a random motivational quote",
    execute: quote,
  },
  {
    commandName1: "snippet",
    description: "Get example code for a concept",
    options: [
      {
        type: "string",
        name: "concept",
        description: "The concept of the code snippet",
        required: true,
        choices: [
          { name: "Variables", value: "variables" },
          { name: "Data Types", value: "data types" },
          { name: "Functions", value: "functions" },
          { name: "Loops", value: "loops" },
          { name: "Conditionals", value: "conditionals" },
          { name: "Arrays", value: "arrays" },
          { name: "Objects", value: "objects" },
          { name: "Classes", value: "classes" },
        ],
      },
    ],
    execute: snippet,
  },
  {
    commandName1: "doc",
    description: "Get documentation link for a service",
    options: [
      {
        type: "string",
        name: "service",
        description: "The service to get documentation for",
        required: true,
        choices: [
          { name: "Node.js", value: "Node.js" },
          { name: "Express", value: "Express" },
          { name: "MongoDB", value: "MongoDB" },
          { name: "React", value: "React" },
          { name: "Vue", value: "Vue" },
          { name: "Angular", value: "Angular" },
          { name: "Python", value: "Python" },
          { name: "Django", value: "Django" },
          { name: "Laravel", value: "Laravel" },
          { name: "Java", value: "Java" },
          { name: "Ruby on Rails", value: "Ruby on Rails" },
          { name: "Flutter", value: "Flutter" },
          { name: "Spring Boot", value: "Spring Boot" },
        ],
      },
    ],
    execute: docService,
  },
];

async function ping(interaction) {
  const sent = Date.now();

  // First, defer reply so we can calculate latency accurately
  await interaction.deferReply();

  const replyTime = Date.now();
  const botLatency = replyTime - sent;
  const apiLatency = Math.round(client.ws.ping);

  // Format uptime (milliseconds to readable time)
  const totalSeconds = Math.floor(process.uptime());
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const uptimeString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  const embed = {
    color: 0x00ffcc,
    title: "🏓 Pong!",
    description: "Here's the detailed latency info:",
    fields: [
      { name: "Bot Latency", value: `${botLatency}ms`, inline: true },
      { name: "WebSocket Latency", value: `${apiLatency}ms`, inline: true },
      { name: "Uptime", value: uptimeString, inline: true },
      {
        name: "Requested By",
        value: `${interaction.user.username}#${interaction.user.discriminator}`,
        inline: false,
      },
    ],
    footer: {
      text: `Channel: #${interaction.channel.name}`,
    },
    timestamp: new Date().toISOString(),
  };

  await interaction.editReply({ embeds: [embed] });

  console.log(
    `Ping used by ${interaction.user.tag} in #${interaction.channel.name} - Bot Latency: ${botLatency}ms`
  );
}

async function troubleshoot(interaction) {
  const error = interaction.options.getString("error");

  const errorExplanations = {
    SyntaxError:
      "🧠 **SyntaxError**: There’s a typo or mistake in your code syntax. Check for missing brackets, quotes, or semicolons.",
    TypeError:
      "🔢 **TypeError**: You're trying to do something with a value of the wrong type, like calling a function on `undefined`.",
    ReferenceError:
      "📛 **ReferenceError**: You tried to use a variable that hasn’t been declared.",
    RangeError:
      "📐 **RangeError**: A number is outside the range of allowed values, like setting an array length to -1.",
    TS2345:
      "💡 **TS2345**: TypeScript says the argument type doesn’t match the expected type. Check your function arguments.",
    TS2304:
      "🔍 **TS2304**: TypeScript can't find a variable or function name. You probably forgot to import or define it.",
    TS1005:
      "✏️ **TS1005**: A symbol like `;`, `)`, or `}` is missing. Check your code formatting.",
    NameError:
      "🔤 **NameError**: You're using a variable or function name that hasn’t been defined yet in Python.",
    ValueError:
      "📦 **ValueError**: A function received the correct type, but an inappropriate value (like `int('abc')`).",
    IndexError:
      "🔢 **IndexError**: You tried to access a list index that doesn't exist.",
    KeyError: "🔑 **KeyError**: A dictionary key doesn't exist.",
    ImportError:
      "📥 **ImportError**: Python couldn’t find the module or function you’re trying to import.",
    ModuleNotFoundError:
      "📦 **ModuleNotFoundError**: The specified module wasn’t found. Try installing it or check the name.",
    IndentationError:
      "📏 **IndentationError**: Python requires indentation. Make sure your tabs/spaces line up.",
    NullPointerException:
      "🕳️ **NullPointerException**: Java tried to access an object that was `null`.",
    ClassNotFoundException:
      "🏷️ **ClassNotFoundException**: Java couldn't find the class definition at runtime.",
    IllegalArgumentException:
      "📘 **IllegalArgumentException**: A method received an argument that it wasn’t expecting.",
    ArithmeticException:
      "➗ **ArithmeticException**: You did something illegal in math, like dividing by zero.",
    SegmentationFault:
      "💥 **SegmentationFault**: Your program accessed an invalid memory location. Common in C/C++.",
    LinkerError:
      "🔗 **LinkerError**: During C/C++ compilation, it couldn’t link your code with libraries or functions.",
    CompilationError:
      "🚧 **CompilationError**: There’s an error preventing the code from compiling successfully.",
    UndefinedBehavior:
      "🌀 **UndefinedBehavior**: C/C++ did something the standard doesn’t define — this is dangerous!",
    RustTypeMismatch:
      "🦀 **RustTypeMismatch**: Rust expected one type but got another. Use the correct types or convert them.",
    CSSSyntaxError:
      "🎨 **CSSSyntaxError**: Your CSS has a formatting problem, like a missing `}` or bad selector.",
    UnknownAtRule:
      "⚠️ **UnknownAtRule**: You used a CSS `@rule` that’s not supported or spelled wrong.",
  };

  const explanation =
    errorExplanations[error] || "❓ No explanation found for this error.";

  const embed = {
    color: 0xff6600,
    title: "🔧 Error Troubleshooting",
    fields: [
      {
        name: `🔍 Error: ${error}`,
        value: explanation,
      },
    ],
    footer: {
      text: `Requested by ${interaction.user.tag}`,
    },
    timestamp: new Date().toISOString(),
  };

  await interaction.reply({ embeds: [embed] });

  console.log(`Troubleshoot used by ${interaction.user.tag} - Error: ${error}`);
}

async function help(interaction) {
  const embed = {
    color: 0x00bfff,
    title: "📚 Available Commands",
    description: "Here’s a list of all slash commands you can use:",
    fields: allCommands.map((cmd) => ({
      name: `/${cmd.commandName1}`,
      value: cmd.description || "No description available",
    })),
    footer: {
      text: `Requested by ${interaction.user.tag}`,
    },
    timestamp: new Date().toISOString(),
  };

  await interaction.reply({ embeds: [embed] });
  console.log(`Help command used by ${interaction.user.tag}`);
}

async function info(interaction) {
  const from = interaction.options.getString("from");
  let embed;

  if (from === "server") {
    const guild = interaction.guild;
    embed = {
      color: 0x3498db,
      title: "🏠 Server Information",
      fields: [
        { name: "Server Name", value: guild.name, inline: true },
        { name: "Server ID", value: guild.id, inline: true },
        { name: "Owner ID", value: guild.ownerId || "Unknown", inline: true },
        {
          name: "Member Count",
          value: guild.memberCount.toString(),
          inline: true,
        },
        {
          name: "Created At",
          value: `<t:${Math.floor(guild.createdTimestamp / 1000)}:F>`,
          inline: true,
        },
      ],
      footer: { text: `Requested by ${interaction.user.tag}` },
      timestamp: new Date().toISOString(),
    };
  } else if (from === "user") {
    const user = interaction.user;
    embed = {
      color: 0x2ecc71,
      title: "👤 User Information",
      fields: [
        { name: "Username", value: `${user.username}`, inline: true },
        { name: "User ID", value: user.id, inline: true },
        { name: "Tag", value: user.tag, inline: true },
        {
          name: "Created At",
          value: `<t:${Math.floor(user.createdTimestamp / 1000)}:F>`,
          inline: true,
        },
      ],
      thumbnail: { url: user.displayAvatarURL() },
      footer: { text: `Requested by ${interaction.user.tag}` },
      timestamp: new Date().toISOString(),
    };
  } else if (from === "bot") {
    embed = {
      color: 0xe67e22,
      title: "🤖 Bot Information",
      fields: [
        { name: "Bot Tag", value: client.user.tag, inline: true },
        { name: "Bot ID", value: client.user.id, inline: true },
        { name: "Servers", value: `${client.guilds.cache.size}`, inline: true },
        {
          name: "Created At",
          value: `<t:${Math.floor(client.user.createdTimestamp / 1000)}:F>`,
          inline: true,
        },
      ],
      footer: { text: `Requested by ${interaction.user.tag}` },
      timestamp: new Date().toISOString(),
    };
  } else {
    await interaction.reply("Invalid option selected.");
    return;
  }

  await interaction.reply({ embeds: [embed] });
  console.log(`Info command used by ${interaction.user.tag} for '${from}'`);
}

async function packageInfo(interaction) {
  const name = interaction.options.getString("name");
  let source = interaction.options.getString("source");

  // Log the request
  console.log(
    `📦 PackageInfo command used by ${interaction.user.tag} for '${name}' from '${source}'`
  );

  // Alias 'yarn' to 'npm'
  if (source === "yarn") {
    source = "npm";
  }

  await interaction.deferReply();

  try {
    let embed;
    switch (source) {
      case "npm":
        embed = await fetchNpmPackage(name);
        break;
      case "pypi":
        embed = await fetchPyPiPackage(name);
        break;
      case "crates":
        embed = await fetchCratesPackage(name);
        break;
      case "rubygems":
        embed = await fetchRubyGemsPackage(name);
        break;
      default:
        console.warn(`⚠️ Unknown package source '${source}'`);
        return interaction.editReply("❌ Unknown source.");
    }

    if (!embed) {
      console.log(`❌ Package '${name}' not found on '${source}'`);
      return interaction.editReply(
        `❌ Package \`${name}\` not found on ${source}.`
      );
    }

    console.log(`✅ Package '${name}' info retrieved from '${source}'`);
    await interaction.editReply({ embeds: [embed] });
  } catch (err) {
    console.error(`❗ Error fetching '${name}' from '${source}':`, err);
    await interaction.editReply(
      "⚠️ An error occurred while fetching package info."
    );
  }
}

async function fetchNpmPackage(name) {
  const res = await fetch(
    `https://registry.npmjs.org/${encodeURIComponent(name)}`
  );
  if (!res.ok) return null;
  const data = await res.json();
  const latest = data["dist-tags"].latest;
  const v = data.versions[latest];

  return new EmbedBuilder()
    .setTitle(`${data.name} (${latest})`)
    .setURL(`https://www.npmjs.com/package/${data.name}`)
    .setDescription(data.description || "No description provided.")
    .setColor(0xcc0000)
    .addFields(
      { name: "Author", value: v.author?.name || "Unknown", inline: true },
      { name: "License", value: v.license || "None", inline: true },
      { name: "Version", value: latest, inline: true }
    );
}
async function fetchPyPiPackage(name) {
  const res = await fetch(
    `https://pypi.org/pypi/${encodeURIComponent(name)}/json`
  );
  if (!res.ok) return null;
  const data = await res.json();
  const info = data.info;

  return new EmbedBuilder()
    .setTitle(`${info.name} (${info.version})`)
    .setURL(info.package_url)
    .setDescription(info.summary || "No description provided.")
    .setColor(0x3776ab)
    .addFields(
      { name: "Author", value: info.author || "Unknown", inline: true },
      { name: "License", value: info.license || "None", inline: true },
      { name: "Home Page", value: info.home_page || "N/A", inline: false }
    );
}
async function fetchCratesPackage(name) {
  const res = await fetch(
    `https://crates.io/api/v1/crates/${encodeURIComponent(name)}`
  );
  if (!res.ok) return null;
  const data = await res.json();
  const crate = data.crate;

  return new EmbedBuilder()
    .setTitle(`${crate.name} (${crate.max_version})`)
    .setURL(`https://crates.io/crates/${crate.name}`)
    .setDescription(crate.description || "No description provided.")
    .setColor(0xde8f00)
    .addFields(
      { name: "License", value: crate.license || "None", inline: true },
      {
        name: "Downloads",
        value: crate.downloads.toLocaleString(),
        inline: true,
      }
    );
}
async function fetchRubyGemsPackage(name) {
  const res = await fetch(
    `https://rubygems.org/api/v1/gems/${encodeURIComponent(name)}.json`
  );
  if (!res.ok) return null;
  const gem = await res.json();

  return new EmbedBuilder()
    .setTitle(`${gem.name} (${gem.version})`)
    .setURL(gem.project_uri)
    .setDescription(gem.info || "No description provided.")
    .setColor(0xff0066)
    .addFields(
      { name: "Authors", value: gem.authors || "Unknown", inline: true },
      {
        name: "License",
        value: gem.licenses?.join(", ") || "None",
        inline: true,
      },
      { name: "Downloads", value: gem.downloads.toLocaleString(), inline: true }
    );
}

async function quote(interaction) {
  const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
  const rquote = motivationalQuotes[randomIndex];

  const quoteEmbed = new EmbedBuilder()
    .setColor("#FF5733") // Set embed color
    .setTitle("Motivational Quote") // Embed title
    .setDescription(`"${rquote}"`) // The quote itself
    .setFooter({
      text: `Stay inspired!`,
      iconURL: "https://i.imgur.com/AfFp7pu.png",
    }); // Footer with a small icon

  await interaction.reply({ embeds: [quoteEmbed] });
  console.log(
    `Motivate command used by ${interaction.user.tag}. Sending quote: "${rquote}"`
  );
}

async function snippet(interaction) {
  const concept = interaction.options.getString("concept");

  // Check if the concept exists in the exampleSnippets object
  const codeSnippet = exampleSnippets[concept];

  if (!codeSnippet) {
    return await interaction.reply({
      content: "Sorry, no example found for this concept.",
      ephemeral: true,
    });
  }

  console.log(
    `Snippet command used by ${interaction.user.tag} for concept '${concept}'`
  );

  const snippetEmbed = new EmbedBuilder()
    .setColor("#0099FF") // Set color
    .setTitle(`Example: ${concept.charAt(0).toUpperCase() + concept.slice(1)}`) // Title based on the concept
    .setDescription(
      `Here is an example for **${
        concept.charAt(0).toUpperCase() + concept.slice(1)
      }**:`
    )
    .addFields({
      name: "Code Snippet",
      value: `\`\`\`js\n${codeSnippet}\n\`\`\``,
      inline: false,
    })
    .setFooter({
      text: `Requested by ${interaction.user.tag}`,
      iconURL: interaction.user.avatarURL(),
    })
    .setTimestamp();

  // Send the embed reply
  await interaction.reply({ embeds: [snippetEmbed] });
}

async function docService(interaction) {
  const service = interaction.options.getString("service");

  // Check if the service exists in the serviceDocs object
  const docLink = serviceDocs[service];

  if (!docLink) {
    return await interaction.reply({
      content: "Sorry, no documentation found for this service.",
      ephemeral: true,
    });
  }

  console.log(
    `Doc service command used by ${interaction.user.tag} for service '${service}'`
  );

  const docEmbed = new EmbedBuilder()
    .setColor("#0099FF") // Set color
    .setTitle(`Documentation for ${service}`)
    .setDescription(
      `You can find the official documentation for **${service}** below:`
    )
    .addFields({
      name: "Documentation Link",
      value: `[Click here to view the documentation](${docLink})`,
      inline: false,
    })
    .setFooter({
      text: `Requested by ${interaction.user.tag}`,
      iconURL: interaction.user.avatarURL(),
    })
    .setTimestamp();

  // Send the embed reply
  await interaction.reply({ embeds: [docEmbed] });
}

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Slash Command Handling
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  allCommands.forEach((command) => {
    if (interaction.commandName === command.commandName1) {
      command.execute(interaction);
    }
  });
});

// Register Slash Commands (Run this once)
let commands = [];

allCommands.forEach((cmd) => {
  let builder = new SlashCommandBuilder()
    .setName(cmd.commandName1)
    .setDescription(cmd.description);

  if (cmd.options) {
    cmd.options.forEach((opt) => {
      switch (opt.type) {
        case "string":
          builder.addStringOption((option) => {
            option
              .setName(opt.name)
              .setDescription(opt.description)
              .setRequired(opt.required);
            if (opt.choices && Array.isArray(opt.choices)) {
              option.addChoices(...opt.choices); // <-- THIS IS CORRECT
            }
            return option;
          });
          break;

        case "integer":
          builder.addIntegerOption((option) => {
            option
              .setName(opt.name)
              .setDescription(opt.description)
              .setRequired(opt.required);
            if (opt.choices && Array.isArray(opt.choices)) {
              option.addChoices(...opt.choices);
            }
            return option;
          });
          break;

        case "user":
          builder.addUserOption((option) =>
            option
              .setName(opt.name)
              .setDescription(opt.description)
              .setRequired(opt.required)
          );
          break;

        case "boolean":
          builder.addBooleanOption((option) =>
            option
              .setName(opt.name)
              .setDescription(opt.description)
              .setRequired(opt.required)
          );
          break;

        // Add more types if needed
      }
    });
  }

  commands.push(builder.toJSON());
});

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);
(async () => {
  try {
    console.log("Registering slash commands...");
    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
      body: commands,
    });
    console.log("Slash commands registered!");
  } catch (error) {
    console.error(error);
  }
})();

client.login(process.env.TOKEN);
