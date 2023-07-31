const app = require("./app");
const config = require("./configs");

const PORT = config.PORT || 8090;

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
