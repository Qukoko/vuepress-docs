## Linux 常用目录及其作用

Linux系统采用了层级式的目录结构。以下是一些最常见和重要的目录及其主要用途:

- `/` (根目录): 整个文件系统的起点,所有其他目录都在此之下。

- `/home`: 用户的主目录。每个用户通常在此下有一个以其用户名命名的子目录。（常用）
  - 例如: `/home/username`

- `/root`: 超级用户(root)的主目录。

- `/etc`: 包含系统各种配置文件。(常用)
  - 例如: `/etc/passwd` (用户账户信息), `/etc/hosts` (主机名和IP地址映射), `/etc/nginx/html/nginx.conf`

- `/bin`: 存放基本的用户命令。
  - 例如: `ls`, `cp`, `mv` 等命令都在这里

- `/sbin`: 存放系统管理命令,通常只有root用户才能使用。
  - 例如: `fdisk`, `ifconfig` 等

- `/usr`: 包含大多数用户工具和应用程序。
  - `/usr/bin`: 存放附加的用户命令
  - `/usr/lib`: 存放程序使用的共享库
  - `/usr/local`: 用于存放本地安装的软件和其他文件

- `/var`: 存放经常变化的文件,如日志文件。
  - `/var/log`: 系统日志文件目录

- `/tmp`: 临时文件目录,系统重启时通常会清空。

- `/boot`: 包含引导加载程序文件,如Linux内核。

- `/dev`: 包含设备文件。
  - 例如: `/dev/sda` (第一个硬盘), `/dev/tty` (终端)

- `/mnt` 或 `/media`: 用于挂载其他文件系统,如CD-ROM,USB驱动器等。

- `/opt`: 用于安装可选的应用程序软件包。

- `/proc`: 虚拟文件系统,提供系统内核和进程信息。

- `/srv`: 存放服务相关数据。


## Linux 常用命令

### 文件和目录操作

安装nvm  
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash  
安装完需要更新配置文件  
source ~/.bashrc

- `ls`: 列出目录内容
    - `ls -l`: 以长格式列出文件详细信息
    - `ls -a`: 显示所有文件,包括隐藏文件

- `cd`: 切换目录
    - `cd /home/user`: 切换到指定目录
    - `cd ..`: 返回上一级目录

- `pwd`: 显示当前工作目录
    - `pwd`: 输出当前路径

- `mkdir`: 创建新目录
    - `mkdir new_folder`: 创建名为new_folder的目录
    - `mkdir -p parent/child`: 创建多级目录

- `rm`: 删除文件或目录
    - `rm file.txt`: 删除文件
    - `rm -r folder`: 递归删除目录及其内容

- `cp`: 复制文件或目录
    - `cp file.txt backup/`: 复制文件到backup目录
    - `cp -r folder1 folder2`: 递归复制整个目录

- `mv`: 移动或重命名文件或目录
    - `mv old.txt new.txt`: 重命名文件
    - `mv file.txt /path/to/new/location/`: 移动文件

- `touch`: 创建空文件或更新文件时间戳
    - `touch newfile.txt`: 创建新的空文件
    - `touch -m file.txt`: 更新文件的修改时间

### 文件内容查看和编辑

- `cat`: 查看文件内容
    - `cat file.txt`: 显示整个文件内容

- `more`/`less`: 分页查看文件内容
    - `more large_file.txt`: 分页显示文件内容
    - `less large_file.txt`: 交互式查看文件内容

- `head`: 查看文件开头部分
    - `head -n 10 file.txt`: 显示文件前10行

- `tail`: 查看文件结尾部分
    - `tail -n 20 file.txt`: 显示文件最后20行
    - `tail -f log.txt`: 实时查看文件更新

- `nano`: 简单的文本编辑器
    - `nano file.txt`: 打开或创建文件进行编辑

- `vim`: 高级文本编辑器
    - `vim file.txt`: 打开文件进行编辑

### 系统信息和进程管理

- `uname`: 显示系统信息
    - `uname -a`: 显示所有系统信息

- `top`: 实时显示系统进程
    - `top`: 显示实时系统状态和进程信息

- `ps`: 显示当前进程状态
    - `ps -ef`: 显示所有进程
    - `ps aux`: 显示所有进程详细信息

- `kill`: 终止进程
    - `kill 1234`: 终止PID为1234的进程
    - `kill -9 5678`: 强制终止PID为5678的进程

- `df`: 显示磁盘空间使用情况
    - `df -h`: 以人类可读格式显示磁盘使用情况

- `du`: 显示目录或文件大小
    - `du -sh *`: 显示当前目录下所有文件和目录的大小

### 网络相关

- `ifconfig`: 显示或配置网络接口
    - `ifconfig`: 显示所有网络接口信息

- `ping`: 测试网络连接
    - `ping google.com`: 测试与Google服务器的连接

- `ssh`: 远程登录
    - `ssh user@hostname`: 连接到远程主机

- `scp`: 远程文件复制
    - `scp file.txt user@remote:/path/`: 将本地文件复制到远程主机

- `wget`: 下载文件
    - `wget https://example.com/file.zip`: 下载指定URL的文件

### 权限管理

- `chmod`: 修改文件权限
    - `chmod 755 file.txt`: 设置文件权限为rwxr-xr-x

- `chown`: 修改文件所有者
    - `chown user:group file.txt`: 更改文件的所有者和组

- `sudo`: 以超级用户身份执行命令
    - `sudo apt update`: 以root权限更新软件包列表

### 压缩和解压

- `tar`: 打包和解包文件
    - `tar -cvf archive.tar folder/`: 创建tar归档
    - `tar -xvf archive.tar`: 解压tar归档

- `gzip`: 压缩文件
    - `gzip file.txt`: 压缩文件

- `gunzip`: 解压缩gzip文件
    - `gunzip file.txt.gz`: 解压gzip文件

### 查找和搜索

- `find`: 在目录层次结构中搜索文件
    - `find /home -name "*.txt"`: 在/home目录下查找所有.txt文件

- `grep`: 搜索文件中的文本
    - `grep "pattern" file.txt`: 在文件中搜索指定模式

### 其他实用命令

- `history`: 显示命令历史
    - `history`: 显示最近使用的命令

- `man`: 显示命令手册
    - `man ls`: 显示ls命令的手册页

- `echo`: 在终端输出字符串
    - `echo "Hello, World!"`: 输出指定字符串

- `date`: 显示或设置系统日期和时间
    - `date`: 显示当前日期和时间
    - `date +"%Y-%m-%d"`: 以指定格式显示日期


[参考文档](https://juejin.cn/post/6844904080972709901)