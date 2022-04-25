const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("Display info about this server."),
  async execute(interaction) {
    return interaction.reply(
      `Name: ${interaction.guild.name}\nMembers: ${interaction.guild.memberCount}`
    );
  },
};
