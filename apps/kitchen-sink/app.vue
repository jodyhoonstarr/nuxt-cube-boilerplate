<template>
  <article class="wrapper flow">
    <h1>Extending from the CUBE Base</h1>
    <div class="switcher">
      <h2 class="text-primary">A heading and paragraph in two columns</h2>
      <p>
        Donec sed odio dui. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet
        rutrum faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum
        faucibus dolor auctor. Praesent commodo cursus magna, vel scelerisque nisl
        consectetur et.
      </p>
    </div>

    <CubeShareableComponent />

    <div>

      <h1>This is the h1 heading and there should only be one of these per page</h1>
      <p>A small paragraph to <em>emphasis</em> and show <strong>important</strong> bits.</p>
      <ul>
        <li>This is a list item</li>
        <li>So is this - there could be more</li>
        <li>Make sure to style list items to:
          <ul>
            <li>Not forgetting child list items</li>
            <li>Not forgetting child list items</li>
            <li>Not forgetting child list items</li>
            <li>Not forgetting child list items</li>
          </ul>
        </li>
        <li>A couple more</li>
        <li>top level list items</li>
      </ul>
      <p>Don't forget <strong>Ordered lists</strong>:</p>
      <ol>
        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
        <li>Aliquam tincidunt mauris eu risus.
          <ol>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
          </ol>
        </li>
        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
        <li>Aliquam tincidunt mauris eu risus.</li>
      </ol>
      <h2>A sub heading which is not as important as the first, but is quite imporant overall</h2>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor
        quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
        ultricies mi vitae est. Mauris placerat eleifend leo.
      </p>

      <table summary="World Population by Country in 2024">
        <caption>World Population by Country, 2024</caption>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Country</th>
            <th>Population</th>
            <th>Yearly Change</th>
            <th>Density (P/Km²)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>India</td>
            <td>1,428,627,663</td>
            <td>0.81%</td>
            <td>481</td>
          </tr>
          <tr>
            <td>2</td>
            <td>China</td>
            <td>1,425,671,352</td>
            <td>-0.02%</td>
            <td>152</td>
          </tr>
          <tr>
            <td>3</td>
            <td>United States</td>
            <td>339,996,563</td>
            <td>0.50%</td>
            <td>37</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Indonesia</td>
            <td>277,534,122</td>
            <td>0.74%</td>
            <td>153</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Pakistan</td>
            <td>240,485,658</td>
            <td>1.98%</td>
            <td>312</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Nigeria</td>
            <td>223,804,632</td>
            <td>2.41%</td>
            <td>246</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Brazil</td>
            <td>216,422,446</td>
            <td>0.52%</td>
            <td>26</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Bangladesh</td>
            <td>172,954,319</td>
            <td>1.03%</td>
            <td>1,329</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Russia</td>
            <td>144,444,359</td>
            <td>-0.19%</td>
            <td>9</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Mexico</td>
            <td>128,455,567</td>
            <td>0.75%</td>
            <td>66</td>
          </tr>
        </tbody>
      </table>


      <table>
        <tr>
          <th>
            Table Heading
          </th>
          <th>
            Table Heading
          </th>
        </tr>
        <tr>
          <td>
            table data
          </td>
          <td>
            table data
          </td>
        </tr>
        <tr>
          <td>
            table data
          </td>
          <td>
            table data
          </td>
        </tr>
        <tr>
          <td>
            table data
          </td>
          <td>
            table data
          </td>
        </tr>
        <tr>
          <td>
            table data
          </td>
          <td>
            table data
          </td>
        </tr>
      </table>

      <h3>A sub heading which is not as important as the second, but should be used with consideration</h3>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor
        quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
        ultricies mi vitae est. Mauris placerat eleifend leo.
      </p>

      <blockquote>
        <p><em>When something is important enough, you do it even if the odds are not in your favor.</em></p>
        <footer>
          — <cite>Elon Musk</cite>
        </footer>
      </blockquote>


      <h4>A sub heading which is not as important as the second, but should be used with consideration</h4>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor
        quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
        ultricies mi vitae est. Mauris placerat eleifend leo.
      </p>
      <blockquote>
        <p>
          “Ooh - a blockquote! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at
          felis
          aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis
          mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.”
        </p>
      </blockquote>

      <pre>
        <code>
        #header h1 a {
          display: block;
          width: 300px;
          height: 80px;
        }
        </code>
      </pre>

      <h5>A sub heading which is not as important as the second, but should be used with consideration</h5>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor
        quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
        ultricies mi vitae est. Mauris placerat eleifend leo.
      </p>

      <dl>
        <dt>Definition list</dt>
        <dd>
          Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </dd>
        <dt>Lorem ipsum dolor sit amet</dt>
        <dd>
          Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </dd>
      </dl>

      <h6>This heading plays a relatively small role, if you use it at all</h6>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor
        quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
        ultricies mi vitae est. Mauris placerat eleifend leo.
      </p>
      <h1>
        Level 1 heading
      </h1>
      <p>
        Sed scelerisque sagittis lorem. Phasellus sodales. Nulla urna justo, vehicula in, suscipit nec, molestie sed,
        tellus.
      </p>
      <h2>
        Level 02 Heading
      </h2>
      <p>
        Sed scelerisque sagittis lorem. Phasellus sodales. Nulla urna justo, vehicula in, suscipit nec, molestie sed,
        tellus.
      </p>
      <h3>
        Level 03 Heading
      </h3>
      <p>
        Sed scelerisque sagittis lorem. Phasellus sodales. Nulla urna justo, vehicula in, suscipit nec, molestie sed,
        tellus.
      </p>
      <h4>
        Level 04 Heading
      </h4>
      <p>
        Sed scelerisque sagittis lorem. Phasellus sodales. Nulla urna justo, vehicula in, suscipit nec, molestie sed,
        tellus.
      </p>
      <h5>
        Level 05 Heading
      </h5>
      <p>
        Sed scelerisque sagittis lorem. Phasellus sodales. Nulla urna justo, vehicula in, suscipit nec, molestie sed,
        tellus.
      </p>
      <h6>
        Level 06 Heading
      </h6>
      <p>
        Sed scelerisque sagittis lorem. Phasellus sodales. Nulla urna justo, vehicula in, suscipit nec, molestie sed,
        tellus.
      </p>



      <blockquote>
        <p>
          Paragraph inside Blockquote: Nam libero leo, elementum in, dapibus a, suscipit vitae, purus. Duis arcu.
          Integer
          dignissim fermentum enim. Morbi convallis felis vel nibh. Sed scelerisque sagittis lorem.
        </p>
      </blockquote>
      <address>
        Address: Example address 224, Sweden
      </address>
      <pre>
      <strong>Preformated:</strong>Testing one row
           and another
      </pre>
      <p>
        I am <a href="?abc123">the a tag</a> example<br>
        I am <abbr title="test">the abbr tag</abbr> example<br>
        I am <b>the b tag</b> example<br>
        I am <cite>the cite tag</cite> example<br>
        I am <code>the code tag</code> example<br>
        I am <del>the del tag</del> example<br>
        I am <dfn>the dfn tag</dfn> example<br>
        I am <em>the em tag</em> example<br>
        I am <i>the i tag</i> example<br>
        I am <ins>the ins tag</ins> example<br>
        I am <kbd>the kbd tag</kbd> example<br>
        I am <q>the q tag</q> example<br>
        I am <samp>the samp tag</samp> example<br>
        I am <small>the small tag</small> example<br>
        I am <span>the span tag</span> example<br>
        I am <strong>the strong tag</strong> example<br>
        I am <sub>the sub tag</sub> example<br>
        I am <sup>the sup tag</sup> example<br>
        I am <var>the var tag</var> example<br>
        I am the <span class="small">small class</span> example<br>
        I am the <span class="large">large class</span> example<br>
        I am the <span class="quiet">quiet class</span> example<br>
        I am the <span class="highlight">highlight class</span> example<br>
      </p>

      <hr>

      <ul>
        <li>Unordered list 01</li>
        <li>Unordered list 02</li>
        <li>Unordered list 03
          <ul>
            <li>Unordered list inside list level 2</li>
            <li>Unordered list inside list level 2
              <ul>
                <li>Unordered list inside list level 3</li>
                <li>Unordered list inside list level 3</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <ol>
        <li>Ordered list 01</li>
        <li>Ordered list 02</li>
        <li>Ordered list 03
          <ol>
            <li>Ordered list inside list level 2</li>
            <li>Ordered list inside list level 2
              <ol>
                <li>Ordered list inside list level 3</li>
                <li>Ordered list inside list level 3</li>
              </ol>
            </li>
          </ol>
        </li>
      </ol>

      <dl>
        <dt>
          Description list title 01
        </dt>
        <dd>
          Description list description 01
        </dd>
        <dt>
          Description list title 02
        </dt>
        <dd>
          Description list description 02
        </dd>
        <dd>
          Description list description 03
        </dd>
      </dl>

      <table>
        <caption>
          Table Caption
        </caption>
        <thead>
          <tr>
            <th>
              Table head th
            </th>
            <td>
              Table head td
            </td>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>
              Table foot th
            </th>
            <td>
              Table foot td
            </td>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <th>
              Table body th
            </th>
            <td>
              Table body td
            </td>
          </tr>
          <tr>
            <td>
              Table body td
            </td>
            <td>
              Table body td
            </td>
          </tr>
        </tbody>
      </table>

      <form action="#">
        <fieldset>
          <legend>Form legend</legend>
          <div>
            <label for="f1">Text input:</label>
            <input type="text" id="f1" value="input text">
          </div>
          <div>
            <label for="pw">Password input:</label>
            <input type="password" id="pw" value="password">
          </div>
          <div>
            <label for="f2">Radio input:</label>
            <input type="radio" id="f2">
          </div>
          <div>
            <label for="f3">Checkbox input:</label>
            <input type="checkbox" id="f3">
          </div>
          <div>
            <label for="f4">Select field:</label>
            <select id="f4">
              <option>
                Option 01
              </option>
              <option>
                Option 02
              </option>
            </select>
          </div>
          <div>
            <label for="f5">Textarea:</label>
            <textarea id="f5" cols="30" rows="5">Textarea text</textarea>
          </div>
          <div>
            <label for="f6">Input Button:</label>
            <input type="button" id="f6" value="button text">
          </div>
          <div>
            <label>Button Elements:</label>
            <button> Save</button>
          </div>
        </fieldset>
      </form>

      <form>
        <div>
          <p>
            <label>
              text<br>
              <input type="text">
            </label>
          </p>
          <p>
            <label>
              password<br>
              <input type="password">
            </label>
          </p>
          <p>
            <label>
              number<br>
              <input type="number">
            </label>
          </p>
          <p>
            <label>
              email<br>
              <input type="email">
            </label>
          </p>
          <p>
            <label>
              url<br>
              <input type="text">
            </label>
          </p>
          <p>
            <label>
              tel<br>
              <input type="tel">
            </label>
          </p>
          <p>
            <label>
              search<br>
              <input type="search">
            </label>
          </p>
          <p>
            <label>
              textarea<br>
              <textarea></textarea>
            </label>
          </p>
          <p>
            <label>
              date<br>
              <input type="date">
            </label>
          </p>
          <p>
            <label>
              datetime<br>
              <input type="datetime">
            </label>
          </p>
          <p>
            <label>
              datetime-local<br>
              <input type="datetime-local">
            </label>
          </p>
          <p>
            <label>
              month<br>
              <input type="month">
            </label>
          </p>
          <p>
            <label>
              week<br>
              <input type="week">
            </label>
          </p>
          <p>
            <label>
              time<br>
              <input type="time">
            </label>
          </p>
          <p>
            <label>
              select<br>
              <select>
                <optgroup label="optgroup">
                  <option>option 1</option>
                  <option>option 2</option>
                  <option>option 3</option>
                </optgroup>
              </select>
            </label>
          </p>
          <p>
            <label>
              select (multiple attr)<br>
              <select multiple>
                <optgroup label="optgroup">
                  <option>option 1</option>
                  <option>option 2</option>
                  <option>option 3</option>
                </optgroup>
              </select>
            </label>
          </p>
          <p>
            <label>
              select (size attr)<br>
              <select size="4">
                <optgroup label="optgroup">
                  <option>option 1</option>
                  <option>option 2</option>
                  <option>option 3</option>
                </optgroup>
              </select>
            </label>
          </p>
          <p>
            <label>
              datalist<br>
              <input list="datalist">
              <datalist id="datalist">
                <option value="option"></option>
              </datalist>
            </label>
          </p>

          <p>
            <label>
              output<br>
              <output>123</output>
            </label>
          </p>
          <p>
            <label>
              radio<br>
              <input type="radio">
            </label>
          </p>
          <p>
            <label>
              checkbox<br>
              <input type="checkbox">
            </label>
          </p>
          <p>
            <label>
              color<br>
              <input type="color">
            </label>
          </p>
          <p>
            <label>
              range<br>
              <input type="range">
            </label>
          </p>
          <p>
            <label>
              file<br>
              <input type="file">
            </label>
          </p>
          <p>
            <label>
              submit<br>
              <input type="submit">
            </label>
          </p>
          <p>
            <label>
              reset<br>
              <input type="reset">
            </label>
          </p>
          <p>
            <label>
              button (input tag)<br>
              <input type="button" value="Button">
            </label>
          </p>
          <p>
            <label>
              button (button tag)<br>
              <button>Button</button>
            </label>
          </p>
        </div>
        <fieldset>
          <legend>legend</legend>
          fieldset
        </fieldset>
      </form>

      <br>

      <details open>
        <summary>This is my summary block within a details tag</summary>
        Inside is more content you can toggle to show and hide. This one is open by default.
      </details>

      <details>
        <summary>This is my second summary block</summary>
        Inside is more content you can toggle to show and hide.
      </details>

      <br>

      I am <a href="something.doc">a word document</a> link, so readers know that I'm not a normal link.<br>
      I am <a href="something.pdf">a pdf document</a> link, so readers know that I'm not a normal link.<br>
      I am <a href="http://www.something.com">an external website</a> link, so readers know that I'm not a normal
      link.<br>
      I am <a href="something.rss">an rss feed</a> link, so readers know that I'm not a normal link.<br>
      I am <a href="something.xls">an excel spreadsheet</a> link, so readers know that I'm not a normal link.<br>
      I am <a href="aim:something">an AIM screenname</a> link, so readers know that I'm not a normal link.<br>
      I am <a href="mailto:something">an email address</a> link, so readers know that I'm not a normal link.<br>
      I am <a href="http://yourwebsite.com">an internal link</a>. Change the stylesheet's "http://yourwebsite.com" to
      your
      domain name so I don't look like an external link.<br>



    </div>

  </article>
</template>

<style lang="postcss">
@import "~/assets/css/global.css";
</style>