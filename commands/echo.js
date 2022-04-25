const { SlashCommandBuilder } = require("@discordjs/builders");
const { execute } = require("./user-info");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("echo")
    .setDescription("Echo!")
    .addStringOption((option) =>
      option.setName("input").setDescription("Enter a string to be echoed")
    ),
  async execute(interaction) {
    const input = interaction.options.getString("input");
    if (input) {
      return interaction.reply(input);
    }
    return interaction.reply("Echo!");
  },
};
