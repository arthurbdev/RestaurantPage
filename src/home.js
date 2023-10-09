import bowlImg from './ramen.png'
import logoImg from './logo.png'
import fishImg from './fish.png'


function drawMain(contentDiv){
  const divContainer = document.createElement('div');
  divContainer.classList.add('bluebg');
  const header = document.createElement('header');

  const logoFigure = document.createElement('logo');
  logoFigure.id = "logo";
  const logo = new Image();
  logo.src = logoImg;
  logo.alt = "logo image";
  const logoCaption = document.createElement('figcaption');
  logoCaption.textContent = "Shiki";
  logoFigure.append(logo,logoCaption);

  header.appendChild(logoFigure)

  const quoteFigure = document.createElement('figcaption');
  quoteFigure.id = "quote";
  const blockquote = document.createElement('blockquote');
  blockquote.textContent = "Ramen: a reminder that even the simplest of experiences can hold profound depths of satisfaction.";
  const quoteCaption = document.createElement('figcaption');
  quoteCaption.textContent = "— Confucius";
  quoteFigure.append(blockquote, quoteCaption);

  const bowl = new Image();
  bowl.src = bowlImg;
  bowl.alt = "ramen bowl";
  bowl.id = "bowlImg";

  header.append(quoteFigure);
  divContainer.append(header, bowl);
  contentDiv.appendChild(divContainer);


  const section = document.createElement('section');
  section.id = "description";
  section.classList.add('yellowbg');
  const fish = new Image();
  fish.src = fishImg;
  fish.id = "fishImg";
  fish.alt = "sliced fish";

  const p1 = document.createElement('p');
  p1.id = "p1";
  p1.textContent = "Ramen: a reminder that even the simplest of experiences can hold profound depths of satisfaction.";
  const p2 = document.createElement('p');
  p2.id = "p2";
  p2.textContent = `Like the diverse ingredients that come together in a
harmonious broth, our lives are an amalgamation of experiences, emotions, and
relationships. The act of savoring a bowl of ramen can be a reflection of our
journey—a reminder that amid the chaos and simplicity, we find moments of
profound satisfaction. It teaches us that beauty often lies in the ordinary,
and just as the perfect balance of broth, noodles, and toppings is sought in
each bowl, we, too, seek equilibrium in our quest for meaning and purpose. In
the steam rising from a bowl of ramen, we may glimpse the ephemeral nature of
life, encouraging us to savor each moment, for in the end, it is the sum of
these moments that defines our existence.`;

  section.append(fish, p1, p2);
  contentDiv.appendChild(section);
}
export default drawMain;
