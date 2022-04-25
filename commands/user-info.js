const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("user-info")
    .setDescription("Display information about yourself."),
  async execute(interaction) {
    numInvites = 0;
    for (const invite in interaction.guild.invites) {
      if (invite.inviter == interaction.user) {
        numInvites += invite.uses;
      }
    }
    return interaction.reply(
      `Username: ${interaction.user.tag}\nID: ${interaction.user.id}\nServer Invites: ${numInvites}`
    );
  },
};
