export const SITE = "https://www.malonedigs.com";
export const PHONE = "(870) 883-0599";
export const TEL = "tel:+18708830599";
// ponytail: texting a photo is the estimate form -- no backend, no inbox for Chase to watch.
// "?&body=" is the one spelling both iOS and Android read.
export const SMS = "sms:+18708830599?&body=Hi%20Chase%2C%20I%20found%20you%20on%20malonedigs.com.%20Here%27s%20the%20job%3A";
export const AREA = "Benton, Saline County, and job sites across Arkansas";

export type Service = {
  slug: string;
  name: string;
  /** Page title fragment, phrased the way people search. */
  title: string;
  short: string;
  intro: string;
  signs: { heading: string; items: string[] };
  body: { heading: string; text: string }[];
  faq: { q: string; a: string }[];
};

// ponytail: copy says only what the old site already said about Chase plus general,
// well-known facts about the work. No years, crews, licenses, or prices until Chase gives them.
export const services: Service[] = [
  {
    slug: "french-drains",
    name: "French drains",
    title: "French Drains in Benton, AR",
    short: "Get standing water away from your house, yard, and driveway.",
    intro:
      "A French drain is a trench with perforated pipe and gravel that catches water underground and carries it somewhere it can't hurt anything. Arkansas clay holds water instead of soaking it up, so a yard that ponds after every rain usually keeps ponding until the water has a way out.",
    signs: {
      heading: "You probably need one if",
      items: [
        "Water stands in the same spot for days after it rains",
        "The crawlspace or garage takes on water",
        "Runoff from a neighbor's lot or a slope crosses your yard",
        "The ground stays soft and muddy along the foundation",
      ],
    },
    body: [
      {
        heading: "Getting the fall right",
        text: "A drain only works if the trench runs downhill the whole way and ends somewhere water can go: a ditch, a lower part of the property, or daylight on a slope. Before anything is dug, Chase looks at where the water is coming from and where it can leave, and tells you plainly if a drain is the right fix.",
      },
      {
        heading: "What the job looks like",
        text: "The trench gets cut along the path the water needs to take, lined, filled with gravel around perforated pipe, and covered back over. You talk to the person running the machine, so if something underground changes the plan, you hear about it before the work changes.",
      },
    ],
    faq: [
      {
        q: "Will a French drain fix water in my crawlspace?",
        a: "Often, if the water is coming from the yard toward the house. Send Chase a photo of where it collects and he'll tell you what he thinks before you spend anything.",
      },
      {
        q: "How much does a French drain cost?",
        a: "It depends on the length, the depth, and where the water has to go. Estimates are free, so call or text for a real number.",
      },
    ],
  },
  {
    slug: "septic-digging",
    name: "Septic digging",
    title: "Septic Digging in Benton, AR",
    short: "Excavation for septic tanks and field lines.",
    intro:
      "Septic digging is the excavation side of a septic job: the hole for the tank and the trenches for the field lines. It has to be dug to the depths and layout the system calls for, in ground that doesn't always want to cooperate.",
    signs: {
      heading: "Common reasons people call",
      items: [
        "A new house on land with no sewer line",
        "Digging for a replacement tank",
        "New or extended field lines",
        "Uncovering an old tank so it can be found and worked on",
      ],
    },
    body: [
      {
        heading: "Dug to the plan",
        text: "Septic work follows a design, and the digging has to match it. Tell Chase what the system calls for and he'll tell you clearly what he can take care of and what the price is.",
      },
      {
        heading: "Rough access is normal",
        text: "Septic jobs are often behind houses, between trees, or on slopes. Clay, roots, and rock are part of digging in Arkansas, and Chase plans for them up front.",
      },
    ],
    faq: [
      {
        q: "Do you install the whole septic system?",
        a: "Call Chase and describe the job. He'll tell you exactly which parts he does.",
      },
      {
        q: "Can you dig up my tank so it can be pumped or repaired?",
        a: "Call and describe where you think it is. Chase will tell you what it'll take.",
      },
    ],
  },
  {
    slug: "land-clearing",
    name: "Land clearing",
    title: "Land Clearing in Benton & Saline County, AR",
    short: "Trees, brush, and stumps off the ground you want to use.",
    intro:
      "Clearing takes overgrown or wooded ground and makes it usable for a house pad, a driveway, a shop, a pasture, or just a yard you can walk across. A lot of land in Saline County hasn't been touched in decades, and the brush shows it.",
    signs: {
      heading: "Typical jobs",
      items: [
        "Clearing a lot before building",
        "Opening up a driveway or access road",
        "Taking brush and small trees off a fence line",
        "Reclaiming acreage that's grown up",
      ],
    },
    body: [
      {
        heading: "Clearing with the next step in mind",
        text: "If the ground is going to be graded or built on, it makes sense to plan the whole job together. Chase can clear, grade, and prep the same site, so you deal with one person from start to finish.",
      },
      {
        heading: "Scope you can see",
        text: "Before work starts you'll know what's coming out, what's staying, and what the price is. Show Chase what you want gone and what you want kept.",
      },
    ],
    faq: [
      {
        q: "Can you leave certain trees?",
        a: "Yes. Tell Chase which ones you want kept and they get worked around.",
      },
      {
        q: "What happens to the brush and stumps?",
        a: "That depends on the site and what you want. Ask during your free estimate and it'll be part of the price you get.",
      },
    ],
  },
  {
    slug: "grading",
    name: "Grading & pad work",
    title: "Grading & Building Pads in Benton, AR",
    short: "Level pads and the right slope so water runs away, not toward.",
    intro:
      "Grading shapes the ground: flat where something is going to sit, and sloped where water needs to run off. A good pad and good drainage around it save a lot of trouble later, especially on Arkansas clay.",
    signs: {
      heading: "Typical jobs",
      items: [
        "Building pads for houses, shops, and barns",
        "Leveling ground for a slab, a driveway, or parking",
        "Fixing a yard that slopes toward the house",
        "Final grading after construction",
      ],
    },
    body: [
      {
        heading: "Water is the whole point",
        text: "Most grading problems are really drainage problems. The ground around a building should carry water away from it, and that's what Chase grades for, not just what looks flat.",
      },
      {
        heading: "One operator, start to finish",
        text: "You work directly with Chase Malone. The scope is clear, the price is clear, and if the ground changes the conversation happens before the work does.",
      },
    ],
    faq: [
      {
        q: "Can you build a pad for a metal building or shop?",
        a: "Yes, building pads are part of what he does. Tell Chase the building's size and where it's going.",
      },
      {
        q: "My yard drains toward the house. Is that grading or a drain?",
        a: "Sometimes one, sometimes both. A photo and a short conversation usually sorts it out, and the estimate is free.",
      },
    ],
  },
  {
    slug: "trenching",
    name: "Trenching",
    title: "Trenching in Benton, AR",
    short: "Trenches for water lines, power, drainage, and utilities.",
    intro:
      "Trenching is digging a narrow cut to a set depth so a line can be laid in it: water, electric, gas, drain pipe, or conduit. Getting the depth and the route right the first time is what keeps it from turning into a second job.",
    signs: {
      heading: "Typical jobs",
      items: [
        "Running water or power out to a shop or barn",
        "Drain lines and culverts",
        "Utility runs on a new build",
        "Trenches for other trades to lay their lines in",
      ],
    },
    body: [
      {
        heading: "Know what's down there",
        text: "Before digging, existing lines get marked. In Arkansas that means calling 811 a few days ahead so the utilities can mark theirs.",
      },
      {
        heading: "Clean trench, clean backfill",
        text: "The trench gets dug to the depth the line needs and filled back in when the line is in, so you aren't left with a ditch across the yard.",
      },
    ],
    faq: [
      {
        q: "How deep do the trenches go?",
        a: "As deep as the line calls for. Tell Chase what's going in the trench and where it has to run.",
      },
      {
        q: "Can you work with my electrician or plumber?",
        a: "Yes. Trenches are often dug for another trade to lay their line in. Have them tell Chase what they need.",
      },
    ],
  },
  {
    slug: "site-prep",
    name: "Site prep & land development",
    title: "Site Prep & Land Development in Arkansas",
    short: "Raw ground turned into a site that's ready to build on.",
    intro:
      "Site prep is everything between raw land and the first day of building: clearing, cutting and filling, grading, drainage, and access. On a bigger piece of land, the same work is how a property gets developed.",
    signs: {
      heading: "What it can include",
      items: [
        "Clearing and stripping the ground",
        "Cut and fill to set elevations",
        "Building pads and driveways",
        "Drainage, trenching, and final grade",
      ],
    },
    body: [
      {
        heading: "One person for the dirt",
        text: "Instead of coordinating someone to clear, someone to grade, and someone to dig drains, you can have one operator do the whole dirt side of the job. You talk to the person doing the work.",
      },
      {
        heading: "Built for Arkansas ground",
        text: "Clay, slopes, timber, and rough access are normal here. Chase plans for them up front so they don't show up as surprises halfway through.",
      },
    ],
    faq: [
      {
        q: "Do you work outside Benton?",
        a: "Yes. Chase is based in Benton and works job sites across Arkansas. Call and tell him where the job is.",
      },
      {
        q: "Can you work with my builder?",
        a: "Yes. Have your builder send the plan or call Chase directly.",
      },
    ],
  },
];

export const byslug = (slug: string) => services.find((s) => s.slug === slug);
