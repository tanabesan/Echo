var helpMessage = "𝙀𝙘𝙝𝙤が起動しました。\n\n🔥現在サポート中のコマンド🔥\n\n/𝗵𝗲𝗹𝗽\nヘルプメッセージを表示します。\n\n/𝘁𝗶𝗺𝗲\n現在時刻を表示します。\n\n\n𝙀𝙘𝙝𝙤はこのディスコードサーバーで作成されました❗️\n是非参加しよう！👇\nhttps://discord.gg/cktZYqRk8x",

function padZero(e) {
	return e.toString().padStart(2, '0');
}

function comJud(e) {
    if (e == "/help") {
        helpMessage = "🔥現在サポート中のコマンド🔥\n\n/𝗵𝗲𝗹𝗽\nヘルプメッセージを表示します。\n\n/𝘁𝗶𝗺𝗲\n現在時刻を表示します。";
        return helpMessage

    } else if (e == "/time") {
        var now = new Date(),
        mm = now.getMonth() + 1,
        dd = now.getDate(),
        h = now.getHours(),
        m = padZero(now.getMinutes()),
        s = padZero(now.getSeconds()),
	  w = now.getDay(),
	  wd = ["日", "月", "火", "水", "木", "金", "土"][Week],
        nowtime = `なう ${h}:${mm}:${s} ${mm}月${dd}日（${wd}）`;
        return nowtime

    } 
}

