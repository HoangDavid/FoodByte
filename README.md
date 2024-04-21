# FoodByte
# 1) Project description
- We aim to develop a platform that allows users to keep track of the food and ingredients they have available. It will store such information in a database, giving recipe suggestions from what is available, alerting the shop when inventory is low, alerting when food is about to expire, meal planning, etc. The platform will help users easily manage their food and grocery shopping and make cooking more enjoyable and efficient.

# 2) Product requirements
- Goal: Create an easy-to-use web application that allows users to keep track of ingredients they have available and generate a food recipe from available ingredients.
- Non-goal: Store ingredients and match them with the corresponding recipes
  - Non-functional requirements 1: Security
    - Functional requirements:
      - Allow users to make their accounts to provide them with personalization
      - Use 3rd party Authentication such as FB, Google Account, etc.
  - Non-functional requirements 2: Storing
    - Functional requirements:
      - Have an interactive virtual fridge with food images indicating its availability. 
      - Allow users to dynamically fill in their current available ingredients and store them in the database
  - Non-functional requirements 3: Suggesting
    - Functional requirements:
      - Retrieve available ingredients from the database 
      - Use Food API to suggest a recipe from available ingredients.


# 3) Project management
- Theme: Help users with meal planning by "virtually" storing their ingredients and giving them recipe suggestions.
- Epic: Website Beta
- User story 1: As a user, I want to keep track of my ingredient’s availability to avoid food waste/shortage
  - Task: Store ingredients in the database
    - Ticket 1: Design and create a DB to store the data
      - Create an Entity Relationship Diagram with the appropriate attributes corresponding to ingredients
    - Ticket 2: Implement a DB 
      - We think we will make use of Firebase
- User story 2: As a user, I want to know what recipes I can make from my available ingredients
  - Task: Implement a food API
    - Ticket 1: Retrieve recipes that match with available ingredients
      - Retrieve ingredients from the database
      - Call API to retrieve recipe that matches available ingredients
    - Ticket 2: Suggest a recipe that the user might like
      - Store previously chosen recipe data and analyze

# 4) Instructions
- npm install
- npm install antd
- npm install @mui/material @emotion/react @emotion/styled

# 5) Video
- Link: https://drive.google.com/file/d/1olyOSXc6JtO2MGwCCcmoe5pTI-u3bqQy/view?usp=share_link
