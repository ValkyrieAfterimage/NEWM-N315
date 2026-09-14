// page switcher

const homePage = `<div class="home thin">
        <div class="hero">
          <p>The Breaking News</p>
        </div>
        <a href="#" id="politics" class="pagelink">
          <div class="preview preview--politics">
            <p>Politics</p>
          </div>
        </a>
        <a href="#" id="film" class="pagelink">
          <div class="preview preview--film">
            <p>Film</p>
          </div>
        </a>
        <a href="#" id="cooking" class="pagelink">
          <div class="preview preview--cooking">
            <p>Cooking</p>
          </div>
        </a>
      </div>`;

const politicsPage = `<div class="politics section thin">
        <h1>Politics</h1>
        <div class="article">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/Lady_Gaga_at_the_White_House_in_2023_%281%29.jpg?utm_source=gpe.wikipedia.org&utm_campaign=index&utm_content=original"
            class="article__image"
          />
          <div class="article__text">
            <h2 class="article__title">Lady Gaga Elected President</h2>
            <h3 class="article__subtitle">Is earth saved?</h3>
            <p class="article__body"></p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              rerum dicta pariatur sunt veritatis suscipit similique praesentium
              maiores exercitationem! Repellendus tempore non deserunt tempora
              qui soluta assumenda dolorum libero vel.
            </p>
            <p>
              Iusto distinctio quos iste explicabo maiores! Sint veritatis qui
              non tenetur quam magnam! Excepturi, aspernatur! Cum vel dolor
              corporis, dolores exercitationem, ullam illum recusandae, totam
              perspiciatis quis assumenda iste quas?
            </p>
            <p>
              Iste consequatur ad officiis facilis, doloremque sequi asperiores
              est in mollitia tenetur adipisci quas laboriosam id dolor odio
              assumenda molestias culpa dolores quod illo, consectetur ratione
              similique! Eligendi, repellat. Eaque?
            </p>
            <p>
              Incidunt accusantium, sint nihil harum hic ut magnam, deleniti
              voluptates explicabo tempore aliquid deserunt aspernatur inventore
              error quo illo recusandae asperiores. Laboriosam, numquam eveniet
              quaerat illo tempora non quos excepturi!
            </p>
            <p>
              Soluta eius aliquid aperiam commodi obcaecati totam facilis nulla
              fuga est ad ipsa nihil nesciunt, consequuntur voluptatum quia
              dolorum molestiae esse? Pariatur temporibus quae necessitatibus
              sequi commodi itaque, distinctio est.
            </p>
          </div>
        </div>
        <div class="article">
          <img
            src="https://i.scdn.co/image/ab6761610000e5ebbfef07cb2d86ab467774cd91"
            class="article__image"
          />
          <div class="article__text">
            <h2 class="article__title">
              Lady London Elected Secretary of the Treasury
            </h2>
            <h3 class="article__subtitle">Is the universe saved?</h3>
            <p class="article__body"></p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              rerum dicta pariatur sunt veritatis suscipit similique praesentium
              maiores exercitationem! Repellendus tempore non deserunt tempora
              qui soluta assumenda dolorum libero vel.
            </p>
            <p>
              Iusto distinctio quos iste explicabo maiores! Sint veritatis qui
              non tenetur quam magnam! Excepturi, aspernatur! Cum vel dolor
              corporis, dolores exercitationem, ullam illum recusandae, totam
              perspiciatis quis assumenda iste quas?
            </p>
            <p>
              Iste consequatur ad officiis facilis, doloremque sequi asperiores
              est in mollitia tenetur adipisci quas laboriosam id dolor odio
              assumenda molestias culpa dolores quod illo, consectetur ratione
              similique! Eligendi, repellat. Eaque?
            </p>
            <p>
              Incidunt accusantium, sint nihil harum hic ut magnam, deleniti
              voluptates explicabo tempore aliquid deserunt aspernatur inventore
              error quo illo recusandae asperiores. Laboriosam, numquam eveniet
              quaerat illo tempora non quos excepturi!
            </p>
            <p>
              Soluta eius aliquid aperiam commodi obcaecati totam facilis nulla
              fuga est ad ipsa nihil nesciunt, consequuntur voluptatum quia
              dolorum molestiae esse? Pariatur temporibus quae necessitatibus
              sequi commodi itaque, distinctio est.
            </p>
          </div>
        </div>
        <div class="article">
          <img
            src="https://f4.bcbits.com/img/a0411338990_16.jpg"
            class="article__image"
          />
          <div class="article__text">
            <h2 class="article__title">
              Lady Brain Drinks Lady Brain Thinks in a Sad Restaurant
            </h2>
            <h3 class="article__subtitle">But what does Lady Brain Want?</h3>
            <p class="article__body"></p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              rerum dicta pariatur sunt veritatis suscipit similique praesentium
              maiores exercitationem! Repellendus tempore non deserunt tempora
              qui soluta assumenda dolorum libero vel.
            </p>
            <p>
              Iusto distinctio quos iste explicabo maiores! Sint veritatis qui
              non tenetur quam magnam! Excepturi, aspernatur! Cum vel dolor
              corporis, dolores exercitationem, ullam illum recusandae, totam
              perspiciatis quis assumenda iste quas?
            </p>
            <p>
              Iste consequatur ad officiis facilis, doloremque sequi asperiores
              est in mollitia tenetur adipisci quas laboriosam id dolor odio
              assumenda molestias culpa dolores quod illo, consectetur ratione
              similique! Eligendi, repellat. Eaque?
            </p>
            <p>
              Incidunt accusantium, sint nihil harum hic ut magnam, deleniti
              voluptates explicabo tempore aliquid deserunt aspernatur inventore
              error quo illo recusandae asperiores. Laboriosam, numquam eveniet
              quaerat illo tempora non quos excepturi!
            </p>
            <p>
              Soluta eius aliquid aperiam commodi obcaecati totam facilis nulla
              fuga est ad ipsa nihil nesciunt, consequuntur voluptatum quia
              dolorum molestiae esse? Pariatur temporibus quae necessitatibus
              sequi commodi itaque, distinctio est.
            </p>
          </div>
        </div>
      </div>`;

const filmPage = `<div class="film section thin">
        <h1>Film</h1>
        <div class="article">
          <img
            src="https://ih1.redbubble.net/image.4766194325.3114/flat,750x,075,f-pad,750x1000,f8f8f8.u1.webp"
            class="article__image"
          />
          <div class="article__text">
            <h2 class="article__title">"Jerma Movie" Breaks All Records</h2>
            <h3 class="article__subtitle">
              Is there nothing this streamer cannot do??
            </h3>
            <p class="article__body"></p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              rerum dicta pariatur sunt veritatis suscipit similique praesentium
              maiores exercitationem! Repellendus tempore non deserunt tempora
              qui soluta assumenda dolorum libero vel.
            </p>
            <p>
              Iusto distinctio quos iste explicabo maiores! Sint veritatis qui
              non tenetur quam magnam! Excepturi, aspernatur! Cum vel dolor
              corporis, dolores exercitationem, ullam illum recusandae, totam
              perspiciatis quis assumenda iste quas?
            </p>
            <p>
              Iste consequatur ad officiis facilis, doloremque sequi asperiores
              est in mollitia tenetur adipisci quas laboriosam id dolor odio
              assumenda molestias culpa dolores quod illo, consectetur ratione
              similique! Eligendi, repellat. Eaque?
            </p>
            <p>
              Incidunt accusantium, sint nihil harum hic ut magnam, deleniti
              voluptates explicabo tempore aliquid deserunt aspernatur inventore
              error quo illo recusandae asperiores. Laboriosam, numquam eveniet
              quaerat illo tempora non quos excepturi!
            </p>
            <p>
              Soluta eius aliquid aperiam commodi obcaecati totam facilis nulla
              fuga est ad ipsa nihil nesciunt, consequuntur voluptatum quia
              dolorum molestiae esse? Pariatur temporibus quae necessitatibus
              sequi commodi itaque, distinctio est.
            </p>
          </div>
        </div>
        <div class="article">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2hkHhXCCx-bu4fcZco0Wey8d5NkW9BeOlggOTZoX1PA&s=10"
            class="article__image"
          />
          <div class="article__text">
            <h2 class="article__title">
              "Rat Movie 3" Coming Soon to Theaters Near You
            </h2>
            <h3 class="article__subtitle">We are the rats</h3>
            <p class="article__body"></p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              rerum dicta pariatur sunt veritatis suscipit similique praesentium
              maiores exercitationem! Repellendus tempore non deserunt tempora
              qui soluta assumenda dolorum libero vel.
            </p>
            <p>
              Iusto distinctio quos iste explicabo maiores! Sint veritatis qui
              non tenetur quam magnam! Excepturi, aspernatur! Cum vel dolor
              corporis, dolores exercitationem, ullam illum recusandae, totam
              perspiciatis quis assumenda iste quas?
            </p>
            <p>
              Iste consequatur ad officiis facilis, doloremque sequi asperiores
              est in mollitia tenetur adipisci quas laboriosam id dolor odio
              assumenda molestias culpa dolores quod illo, consectetur ratione
              similique! Eligendi, repellat. Eaque?
            </p>
            <p>
              Incidunt accusantium, sint nihil harum hic ut magnam, deleniti
              voluptates explicabo tempore aliquid deserunt aspernatur inventore
              error quo illo recusandae asperiores. Laboriosam, numquam eveniet
              quaerat illo tempora non quos excepturi!
            </p>
            <p>
              Soluta eius aliquid aperiam commodi obcaecati totam facilis nulla
              fuga est ad ipsa nihil nesciunt, consequuntur voluptatum quia
              dolorum molestiae esse? Pariatur temporibus quae necessitatibus
              sequi commodi itaque, distinctio est.
            </p>
          </div>
        </div>
      </div>`;

const cookingPage = `<div class="cooking section thin">
        <h1>Film</h1>
        <div class="article">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6O-med15qwpGaM4kFZCytfI1emBffWzM0nLFUNmxltA&s=10"
            class="article__image"
          />
          <div class="article__text">
            <h2 class="article__title">Lobster Thermadior Recipe</h2>
            <h3 class="article__subtitle">
              "That looks good af ngl" --some dude
            </h3>
            <p class="article__body"></p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              rerum dicta pariatur sunt veritatis suscipit similique praesentium
              maiores exercitationem! Repellendus tempore non deserunt tempora
              qui soluta assumenda dolorum libero vel.
            </p>
            <p>
              Iusto distinctio quos iste explicabo maiores! Sint veritatis qui
              non tenetur quam magnam! Excepturi, aspernatur! Cum vel dolor
              corporis, dolores exercitationem, ullam illum recusandae, totam
              perspiciatis quis assumenda iste quas?
            </p>
            <p>
              Iste consequatur ad officiis facilis, doloremque sequi asperiores
              est in mollitia tenetur adipisci quas laboriosam id dolor odio
              assumenda molestias culpa dolores quod illo, consectetur ratione
              similique! Eligendi, repellat. Eaque?
            </p>
            <p>
              Incidunt accusantium, sint nihil harum hic ut magnam, deleniti
              voluptates explicabo tempore aliquid deserunt aspernatur inventore
              error quo illo recusandae asperiores. Laboriosam, numquam eveniet
              quaerat illo tempora non quos excepturi!
            </p>
            <p>
              Soluta eius aliquid aperiam commodi obcaecati totam facilis nulla
              fuga est ad ipsa nihil nesciunt, consequuntur voluptatum quia
              dolorum molestiae esse? Pariatur temporibus quae necessitatibus
              sequi commodi itaque, distinctio est.
            </p>
          </div>
        </div>
        <div class="article">
          <img
            src="https://www.snexplores.org/wp-content/uploads/sites/3/2019/11/860_main_questions_CJdirt_0.gif"
            class="article__image"
          />
          <div class="article__text">
            <h2 class="article__title">Dirt</h2>
            <h3 class="article__subtitle">Eat Dirt</h3>
            <p class="article__body"></p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              rerum dicta pariatur sunt veritatis suscipit similique praesentium
              maiores exercitationem! Repellendus tempore non deserunt tempora
              qui soluta assumenda dolorum libero vel.
            </p>
            <p>
              Iusto distinctio quos iste explicabo maiores! Sint veritatis qui
              non tenetur quam magnam! Excepturi, aspernatur! Cum vel dolor
              corporis, dolores exercitationem, ullam illum recusandae, totam
              perspiciatis quis assumenda iste quas?
            </p>
            <p>
              Iste consequatur ad officiis facilis, doloremque sequi asperiores
              est in mollitia tenetur adipisci quas laboriosam id dolor odio
              assumenda molestias culpa dolores quod illo, consectetur ratione
              similique! Eligendi, repellat. Eaque?
            </p>
            <p>
              Incidunt accusantium, sint nihil harum hic ut magnam, deleniti
              voluptates explicabo tempore aliquid deserunt aspernatur inventore
              error quo illo recusandae asperiores. Laboriosam, numquam eveniet
              quaerat illo tempora non quos excepturi!
            </p>
            <p>
              Soluta eius aliquid aperiam commodi obcaecati totam facilis nulla
              fuga est ad ipsa nihil nesciunt, consequuntur voluptatum quia
              dolorum molestiae esse? Pariatur temporibus quae necessitatibus
              sequi commodi itaque, distinctio est.
            </p>
          </div>
        </div>
      </div>`;

const pages = {
  home: homePage,
  politics: politicsPage,
  film: filmPage,
  cooking: cookingPage,
};

export function changePage(pageName) {
  console.log("congration you done it to " + pageName);
  document.querySelector("#app").innerHTML = pages[pageName];
}

// load data button model

export function loadData(fName, callback) {
  console.log("call me " + fName);
  let newName = fName + " Valkyrie";

  callback(newName);
}
