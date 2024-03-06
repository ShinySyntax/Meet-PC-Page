const emojData= {
	emojiList: [
		{ url: '1f642.png', alt: '[微笑]' },
		{ url: '1f643.png', alt: '[微笑倒]' },
		{ url: '12639.png', alt: '[不开心]' },
		{ url: '1f602.png', alt: '[笑哭]' },
		{ url: '1f633.png', alt: '[发呆]' },
		{ url: '1f60e.png', alt: '[墨镜]' },
		{ url: '1f62d.png', alt: '[大哭]' },
		{ url: '1f60a.png', alt: '[可爱]' },
		{ url: '1f910.png', alt: '[哑]' },
		{ url: '1f634.png', alt: '[睡]' },
		{ url: '1f622.png', alt: '[哭]' },
		{ url: '1f605.png', alt: '[囧]' },
		{ url: '1f621.png', alt: '[怒]' },
		{ url: '1f61c.png', alt: '[调皮]' },
		{ url: '1f604.png', alt: '[笑]' },
		{ url: '1f631.png', alt: '[惊讶]' },
		{ url: '1f641.png', alt: '[难过]' },
		{ url: '1f913.png', alt: '[酷]' },
		{ url: '1f625.png', alt: '[汗]' },
		{ url: '1f62b.png', alt: '[抓狂]' },
		{ url: '1f92e.png', alt: '[吐]' },
		{ url: '1f606.png', alt: '[大笑]' },
		{ url: '1f601.png', alt: '[快乐]' },
		{ url: '1f60f.png', alt: '[得意]' },
		{ url: '1f60b.png', alt: '[饿]' },
		{ url: '1f635.png', alt: '[累]' },
		{ url: '1f628.png', alt: '[吓]' },
		{ url: '1f613.png', alt: '[汗]' },
		{ url: '1f61d.png', alt: '[高兴]' },
		{ url: '1f611.png', alt: '[闲]' },
		{ url: '1f920.png', alt: '[努力]' },
		{ url: '1f92c.png', alt: '[骂]' },
		{ url: '1f914.png', alt: '[疑问]' },
		{ url: '1f92b.png', alt: '[秘密]' },
		{ url: '1f92f.png', alt: '[乱]' },
		{ url: '1f624.png', alt: '[疯]' },
		{ url: '1f623.png', alt: '[哀]' },
		{ url: '1f608.png', alt: '[坏笑]' },
		{ url: '1f923.png', alt: '[笑歪]' },
		{ url: '1f917.png', alt: '[bye]' },
		{ url: '1f924.png', alt: '[饥饿]' },
		{ url: '1f644.png', alt: '[白眼]' },
		{ url: '1f60d.png', alt: '[色]' },
		{ url: '1f616.png', alt: '[糟糕]' },
		{ url: '1f612.png', alt: '[嫌弃]' },
		{ url: '1f61a.png', alt: '[亲亲]' },
		{ url: '1f609.png', alt: '[wink]' },
		{ url: '1f629.png', alt: '[累]' },
		{ url: '1f615.png', alt: '[看]' },
		{ url: '1f61f.png', alt: '[哀]' },
		{ url: '1f61e.png', alt: '[失落]' },
		{ url: '1f47f.png', alt: '[坏]' },
		{ url: '1f618.png', alt: '[飞吻]' },
		{ url: '1f630.png', alt: '[冷汗]' },
		{ url: '1f97a.png', alt: '[可怜]' },
		{ url: '1f60c.png', alt: '[惬意]' },
		{ url: '1f61b.png', alt: '[吐舌]' },
		{ url: '1f92a.png', alt: '[鬼脸]' },
		{ url: '1f92d.png', alt: '[捂嘴]' },
		{ url: '1f614.png', alt: '[失落]' },
		{ url: '1f9d0.png', alt: '[傲]' },
		{ url: '1f62c.png', alt: '[龇牙]' },
		{ url: '1f620.png', alt: '[皱眉]' },
		{ url: '1f62a.png', alt: '[鼻涕]' },
		{ url: '1f62e.png', alt: '[哦]' },
		{ url: '1f632.png', alt: '[噢]' },
		{ url: '1f637.png', alt: '[感冒]' },
		{ url: '1f912.png', alt: '[发烧]' },
		{ url: '1f927.png', alt: '[伤风]' },
		{ url: '1f627.png', alt: '[啊]' },
		{ url: '1f607.png', alt: '[升天]' },
		{ url: '1f911.png', alt: '[吐钱]' },
		{ url: '1f915.png', alt: '[头疼]' },
		{ url: '1f922.png', alt: '[恶心]' },
		{ url: '1f925.png', alt: '[说谎]' },
		{ url: '1f928.png', alt: '[疑惑]' },
		{ url: '1f929.png', alt: '[眼冒金星]' },
		{ url: '1263a.png', alt: '[舒服]' },
		{ url: '1f975.png', alt: '[热]' },
		{ url: '1f970.png', alt: '[温暖]' },
		{ url: '1f973.png', alt: '[庆祝]' },
		{ url: '1f974.png', alt: '[歪嘴]' },
		{ url: '1f976.png', alt: '[冻僵]' },
		{ url: '1f4a9.png', alt: '[翔]' },
		{ url: '1f47b.png', alt: '[幽灵]' },
		{ url: '1f47d.png', alt: '[外星人]' },
		{ url: '1f63a.png', alt: '[猫笑]' },
		{ url: '1f63b.png', alt: '[猫色]' },
		{ url: '1f63c.png', alt: '[猫得意]' },
		{ url: '1f63d.png', alt: '[猫亲亲]' },
		{ url: '1f63e.png', alt: '[猫难过]' },
		{ url: '1f63f.png', alt: '[猫冷汗]' },
		{ url: '1f638.png', alt: '[猫大笑]' },
		{ url: '1f639.png', alt: '[猫笑哭]' },
		{ url: '1f640.png', alt: '[猫惊吓]' },
		{ url: '1f47e.png', alt: '[怪物]' },
		{ url: '1f64a.png', alt: '[不问]' },
		{ url: '1f648.png', alt: '[不看]' },
		{ url: '1f649.png', alt: '[不听]' },
		{ url: '1f47a.png', alt: '[面具]' },
		{ url: '1f479.png', alt: '[狮子]' },
		{ url: '1f480.png', alt: '[骷髅]' },
		{ url: '1f916.png', alt: '[机器人]' },
		{ url: '1f921.png', alt: '[小丑]' },
		{ url: '2620.png', alt: '[海盗]' },
		{ url: 'embrace.png', alt: '[抱抱]' },
		{ url: 'boxing.png', alt: '[抱拳]' },
		{ url: 'handshake.png', alt: '[握手]' },
		{ url: '1f44c.png', alt: '[OK]' },
		{ url: '1f44d.png', alt: '[点赞]' },
		{ url: '1f44e.png', alt: '[倒彩]' },
		{ url: '1f44b.png', alt: '[挥手]' },
		{ url: '1f44a.png', alt: '[拳头]' },
		{ url: '1f91a.png', alt: '[手掌]' },
		{ url: '1f91b.png', alt: '[出拳]' },
		{ url: '270c.png', alt: '[剪刀手]' },
		{ url: '1f446.png', alt: '[向上]' },
		{ url: '1f447.png', alt: '[向下]' },
		{ url: '1f448.png', alt: '[向左]' },
		{ url: '1f449.png', alt: '[向右]' },
		{ url: '1f595.png', alt: '[鄙视]' },
		{ url: '261d.png', alt: '[食指]' },
		{ url: '1f919.png', alt: '[666]' },
		{ url: '270a.png', alt: '[十]' },
		{ url: '1f91e.png', alt: '[九]' },
		{ url: '1f596.png', alt: '[八]' },
		{ url: '1f91f.png', alt: '[七]' },
		{ url: '1f918.png', alt: '[六]' },
		{ url: '1f590.png', alt: '[五]' },
		{ url: '1f4a3.png', alt: '[炸弹]' },
		{ url: '1f4a2.png', alt: '[愤怒]' },
		{ url: '1f4a4.png', alt: '[zzz]' },
		{ url: '1f4a5.png', alt: '[火花]' },
		{ url: '1f4a6.png', alt: '[水滴]' },
		{ url: '1f4a8.png', alt: '[尾气]' },
		{ url: '1f4ab.png', alt: '[星星]' },
		{ url: '1f4af.png', alt: '[100分]' },
		{ url: '1f5a4.png', alt: '[黑心]' },
		{ url: '1f9e1.png', alt: '[橙心]' },
		{ url: '1f49a.png', alt: '[绿心]' },
		{ url: '1f49b.png', alt: '[黄心]' },
		{ url: '1f49c.png', alt: '[紫心]' },
		{ url: '1f499.png', alt: '[蓝心]' },
		{ url: '2764.png', alt: '[红心]' },
		{ url: '1f494.png', alt: '[心碎]' },
		{ url: '1f493.png', alt: '[心动]' },
		{ url: '1f497.png', alt: '[心跳]' },
		{ url: '1f49e.png', alt: '[心转]' },
		{ url: '1f49d.png', alt: '[心结]' },
		{ url: '1f495.png', alt: '[两心]' },
		{ url: '1f496.png', alt: '[动心]' },
		{ url: '1f498.png', alt: '[一见钟情]' },
		{ url: '1f49f.png', alt: '[心标]' },
		{ url: '2763.png', alt: '[感叹]' },
		{ url: '1f48b.png', alt: '[唇印]' },
		{ url: '1f573.png', alt: '[洞]' },
		{ url: '1f4ac.png', alt: '[消息]' },
		{ url: '1f4ad.png', alt: '[想法]' },
		{ url: '1f5ef.png', alt: '[对话框]' },
		{ url: '1f48c.png', alt: '[情书]' },
	]
}
function replaceEmoji(str) {
	let replacedStr = str.replace(/\[([^(\]|\[)]*)\]/g, (item, index) => {
		let imgstr;
		for (let i = 0; i < emojData.emojiList.length; i++) {
			let row = emojData.emojiList[i];
			if (row.alt == item) {
				imgstr = `<img src="${process.env.BASE_URL}static/emoji/emoji/${row.url}" style="width:18px;height:18px;vertical-align: middle;" alt="${item}">`;
			}
		}
		return imgstr||item;
	});
	return replacedStr;
}
export {
	emojData,
	replaceEmoji
}