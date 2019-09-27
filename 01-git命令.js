/*
    git 一款源代码管理工具（版本控制工具）
    svn vss vcs ....git
    --初始化Git仓储（仓库）,存储git备份的项目代码文件
    git init
    --配置用户信息 xxxx
    git config --global user.name "用户名"
    --设置邮箱  1111@qq.com
    git config --global user.email "邮箱"
    --备份文件（暂存区-版本库）
    git add "filename"
    git commit -m "说明"
    --git commit --all -m ''
    --查看状态
    git status
    --查看日志
    git log
    git log --oneline
    --版本回退（Head~num后面0表示最新版本，num=0,1...）
    git reset --hard Head~0
    --回退到指定版本（查看日志时，commit就是版本号）
    git reset --hard "版本号"
    --查看历史版本号（查看切换的版本的记录）
    git reflog
    ##################分支######################
    默认是有一个主支master。以下是分支的内容，name表示分支的名
    --创建分支
    git branch  name
    --查看分支
    git branch
    --切换到分支
    git checkout name 
    --把分支合并到主支
    git marge name
    --删除分支
    git branch -d name
    --合并时，如果出现冲突需要手动合并，合并之后再提交。

    --把代码上传到githup上
    git push [地址]  master
    --从githup上获取代码(本地要初始一个仓储)
    git pull [地址] master
    git clone [地址]
    **clone：如果多次执行会覆盖本地内容
    --pull和push的简单操作
    可以定义一个变量把地址赋给变量(git remote add 变量名  [地址])
    git push 变量  master
    git pull 变量 master
    --  添加-u (git push/pull 变量  -u master)
    git push 就能上传代码
    git pull


*/
/*
    ssh方式上传代码
    --公钥 私钥
    --生成公钥和私钥
    ssh-keygen -t rsa -C "邮箱"

    push和pull 操作时，先pull再push。如果服务器版本和本地冲突的话可以在本地解决之后再上传。
*/