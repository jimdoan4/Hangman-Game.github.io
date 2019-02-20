<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" type="text/css" href="style.css" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.cs"
    />
    <title>Hang Game</title>
  </head>
  <!-- 𝔾𝕦𝕖𝕤𝕤 𝕥𝕙𝕖 𝕒𝕦𝕥𝕠𝕞𝕠𝕓𝕚𝕝𝕖'𝕤 𝕓𝕣𝕒𝕟𝕕 𝕟𝕒𝕞𝕖 -->
  <body>
    <header>
      <h1 id="hangman">🄷🄰🄽🄶🄼🄰🄽 🄶🄰🄼🄴</h1>
      <p>Find your CITY, find your MATCH</p>
    </header>

    <div class="container">
      <p id="one">Tries Left:</p>
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <link rel="stylesheet" type="text/css" href="style.css" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.cs"
          />
          <title>Hang Game</title>
        </head>
        <!-- 𝔾𝕦𝕖𝕤𝕤 𝕥𝕙𝕖 𝕒𝕦𝕥𝕠𝕞𝕠𝕓𝕚𝕝𝕖'𝕤 𝕓𝕣𝕒𝕟𝕕 𝕟𝕒𝕞𝕖 -->
        <body>
          <header>
            <h1 id="hangman">🄷🄰🄽🄶🄼🄰🄽 🄶🄰🄼🄴</h1>
            <p>Find your CITY, find your MATCH</p>
          </header>

          <div class="container">
            <p id="one">Tries Left:</p>
            <!-- # of lives remaining -->
            <div id="livesRemaining" class="col"></div>

            <!-- Topics to choose from -->
            <div id="category"></div>

            <!-- This is where the underlines are -->
            <div id="underscores" class="col"></div>

            <!-- # of wins per player -->
            <div id="sumWins" class="col"></div>
            <p id="two">Win Counts:</p>

            <!-- This is the onclick buttons -->
            <div id="buttons" class="col"></div>
            <!-- Start/Clear Buttons -->
          </div>
          <div class="container">
            <button id="start" onclick="startGame()">Start</button>
            <button id="clear" onclick="clearGame()">Reset</button>
          </div>

          <!-- <img src="https://cdn.instructables.com/FZN/8U7N/JCGKCTA9/FZN8U7NJCGKCTA9.LARGE.jpg" alt=""> -->
          <!-- canvas for Hangman -->
          <canvas id="man"></canvas>

          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
          <script src="hangman.js"></script>
        </body>
      </html>

      <!-- # of lives remaining -->
      <div id="livesRemaining" class="col"></div>

      <!-- Topics to choose from -->
      <div id="category"></div>

      <!-- This is where the underlines are -->
      <div id="underscores" class="col"></div>

      <!-- # of wins per player -->
      <div id="sumWins" class="col"></div>
      <p id="two">Win Counts:</p>

      <!-- This is the onclick buttons -->
      <div id="buttons" class="col"></div>
      <!-- Start/Clear Buttons -->
    </div>
    <div class="container">
      <button id="start" onclick="startGame()">Start</button>
      <button id="clear" onclick="clearGame()">Reset</button>
    </div>

    <!-- <img src="https://cdn.instructables.com/FZN/8U7N/JCGKCTA9/FZN8U7NJCGKCTA9.LARGE.jpg" alt=""> -->
    <!-- canvas for Hangman -->
    <canvas id="man"></canvas>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="hangman.js"></script>
  </body>
</html>
