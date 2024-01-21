const { Client, GatewayIntentBits, MessageEmbed, EmbedBuilder } = require('discord.js');
const { ActivityType } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
});
const prefix = '배뱁새'; // 이 부분에 봇의 사용할 접두사를 설정하세요
client.logeady', () => {
  console.log("봇이 준비되었습니다.")
  client.user.setActivity('이세돌', { type: ActivityType.Watching });
});

client.on('messageCreate', async (msg) => {
  if (msg.author.bot) return; // 봇이 보낸 메시지는 무시

  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const cmd = args.shift().toLowerCase();

  if (cmd == '도움말') 
    msg.reply('몰루?');  

  if (cmd == '가위바위보')
    msg.channel.send('가위바위보는 배뱁새 가위/바위/보 로 할수있어요!');

  if (cmd == '가위')
    msg.channel.send('바위! 제가 이겼어요!');

  if (cmd == '바위')
    msg.channel.send('보! 제가 이겼어요!');

  if (cmd == '보')
    msg.channel.send('가위! 제가 이겼어요!');

  if (cmd == '삭제') {
    msg.delete();
    msg.reply('삭제했어요!');
  }

  class Random {
    nextInt(max) {
      return Math.floor(Math.random() * max);
    }
  }

  // 배뱁새 동전 던지기
  if (cmd == "동전") {
    // 동전을 던집니다.
    const random = new Random();
    const result = random.nextInt(100);
  
    // 결과에 따라 메시지를 보냅니다.
    if (result < 48) {
      msg.channel.send("앞면이 나왔어요!");
    } else if (result < 96) {
      msg.channel.send("뒷면이 나왔어요!");
    } else {
      msg.channel.send("앗 동전을 떨어뜨렸어요!");
    }
  }

  // 주사위
  if (cmd == "주사위") {
    const result = Math.floor(Math.random() * 61);

    if (result <= 10) {
      const sentMessage = await msg.channel.send("데구르르...");

      setTimeout(() => {
        sentMessage.edit("1이 나왔어요!");
      }, 2000);
    } else if (result <= 20) {
      const sentMessage = await msg.channel.send("데구르르...");

      setTimeout(() => {
        sentMessage.edit("2가 나왔어요!");
      }, 2000);
    } else if (result <= 30) {
      const sentMessage = await msg.channel.send("데구르르...");

      setTimeout(() => {
        sentMessage.edit("3이 나왔어요!");
      }, 2000);
    } else if (result <= 40) {
      const sentMessage = await msg.channel.send("데구르르...");

      setTimeout(() => {
        sentMessage.edit("4가 나왔어요!");
      }, 2000);
    } else if (result <= 50) {
      const sentMessage = await msg.channel.send("데구르르...");

      setTimeout(() => {
        sentMessage.edit("5가 나왔어요!");
      }, 2000);
    } else if (result <= 60) {
      const sentMessage = await msg.channel.send("데구르르...");

      setTimeout(() => {
        sentMessage.edit("6이 나왔어요!");
      }, 2000);
    } else {
      const sentMessage = await msg.channel.send("데구르르...");

      setTimeout(() => {
        sentMessage.edit("앗 떨어뜨렸어요!");
      }, 2000);
    }
  }


  if (msg.author.bot) return;

  if (msg.content.startsWith(prefix)) {
    // 명령어를 파싱하여 실행
    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === '프로필') {
      const user = msg.mentions.users.first() || msg.author;

      const embed = new EmbedBuilder()
        .setTitle(`${user.tag}의 프로필`)
        .setImage(`${user.displayAvatarURL()}`)
        .addFields(
          { name: '닉네임', value: user.tag },
          { name: '계정 생성일', value: user.createdAt.toUTCString() }
        )
        .setColor('#7289da'); // Discord 색상 코드

        msg.reply({ embeds: [embed] });
    }
  }
}
)
