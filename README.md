# MemcacheDos
Memcache 反射攻击.

# 如何使用
```
git clone https://github.com/Srar/MemcacheDos.git
cd MemcacheDos
npm install
./node_modules/.bin/ts-node main.ts --list result.txt --ip 1.1.1.1 --port 80
```

# Q&A
* 测试平台
  > CentOS7, nodejs v6.12.3 yum安装
* `npm install`安装`raw-socket`时出现错误
  > 使用`npm install --unsafe` 
* 反射无效果
  > 机房已经拦截了伪造IP的数据包
* 反射倍率
  > 目前反射倍率60倍. 可以自行先`set`一段较大的数据, 再使用此数据来反射, 据说倍率可以到4w倍.

> 全部issues不作回答.

# 相关新闻
* [Memcrashed - Major amplification attacks from UDP port 11211](https://blog.cloudflare.com/memcrashed-major-amplification-attacks-from-port-11211/)
* [利用 Memcache 作为 DRDoS 反射放大器进行 DDoS 攻击](https://cert.360.cn/warning/detail?id=c63eb87058834e37c7c112c35ef5f9fd)
