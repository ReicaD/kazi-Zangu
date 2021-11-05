const identities = [
  { 
      tittle: "The Purseonals:",
    Purseonals:
      "Toward the end of my pregnancy I was tired and swollen and the first few months with Vaughn have been spent with me carrying a Prada Nylon backpack (review of that to come next, I really use that bag a ton) as my everyday bag.",
    link: "https://www.purseblog.com/purseonals/polene-numero-un-mini/",
  },
  {
    tittle: "The Streets:",
    Purseonals: "I LOVE how this bag looks! Aesthetics is listed top of every Purseonals because without a bag you're drawn to, you probably won't even consider buying it.",
    link: "https://www.purseblog.com/bags-in-the-wild/the-best-street-style-bags-we-spotted-at-las-the-grove/",
  },

  {
    tittle: "The Non-Suppliers:",
    Purseonals:
      "I decided to investigate while looking for my next big purchase and report back on my experience at each boutique, so you know what to expect.",
    link: "https://www.purseblog.com/guides/a-guide-to-shopping-south-coast-plaza/",
  },
];

function renderPosts(identities) {
  const len = identities.length; //posts is an array
  var html = "";
  for (let i = 0; i < len; i++) {
    html += `
    <h2> ${identities[i].tittle}</h2>
    <h3 class="lead">  ${identities[i].Purseonals} </h3>
    <a href = ${identities[i].link} class="btn btn-warning">Read More</a>

    
    <hr>
  `;
  }

  const container = document.getElementById("container");
  container.innerHTML = `<p id="posts"> ${html} </p>`;
}
renderPosts(identities, document.getElementById("container"));
