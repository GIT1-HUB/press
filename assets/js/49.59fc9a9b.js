(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{500:function(s,a,t){"use strict";t.r(a);var e=t(2),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mysql备份恢复数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql备份恢复数据"}},[s._v("#")]),s._v(" MySQL备份恢复数据")]),s._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#binlog2sql"}},[s._v("binlog2sql")]),t("ul",[t("li",[t("a",{attrs:{href:"#mysql必须设置参数"}},[s._v("MySQL必须设置参数")])]),t("li",[t("a",{attrs:{href:"#user需要的最小权限集合"}},[s._v("user需要的最小权限集合")])]),t("li",[t("a",{attrs:{href:"#查看目前的binlog文件"}},[s._v("查看目前的binlog文件")])]),t("li",[t("a",{attrs:{href:"#定位误操作sql的binlog位置"}},[s._v("定位误操作SQL的binlog位置")])]),t("li",[t("a",{attrs:{href:"#生成sql文件回滚"}},[s._v("生成sql文件回滚")])]),t("li",[t("a",{attrs:{href:"#不生成sql文件回滚"}},[s._v("不生成sql文件回滚")])])])]),t("li",[t("a",{attrs:{href:"#mysqldump"}},[s._v("mysqldump")]),t("ul",[t("li",[t("a",{attrs:{href:"#mysqldump导出"}},[s._v("mysqldump导出")])]),t("li",[t("a",{attrs:{href:"#mysqldump导入"}},[s._v("mysqldump导入")])]),t("li",[t("a",{attrs:{href:"#mysqldump两台主机同步备份"}},[s._v("mysqldump两台主机同步备份")])])])]),t("li",[t("a",{attrs:{href:"#source命令导入"}},[s._v("source命令导入")])]),t("li",[t("a",{attrs:{href:"#主从同步"}},[s._v("主从同步")]),t("ul",[t("li",[t("a",{attrs:{href:"#配置主服务器"}},[s._v("配置主服务器")])]),t("li",[t("a",{attrs:{href:"#配置从服务器"}},[s._v("配置从服务器")])]),t("li",[t("a",{attrs:{href:"#如果出现以下错误"}},[s._v("如果出现以下错误")])])])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"binlog2sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binlog2sql"}},[s._v("#")]),s._v(" binlog2sql")]),s._v(" "),t("blockquote",[t("p",[s._v("使用此方式之前一定是MySQL开启了bin-log的才可行，如果没有安装开源工具"),t("code",[s._v("binlog2sql")]),s._v("那么请安装。")])]),s._v(" "),t("blockquote",[t("p",[s._v("binlog2sql是一款简单易用的binlog解析工具，其中一个功能就是生成回滚SQL。")])]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/danfengcao/binlog2sql",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/danfengcao/binlog2sql"),t("OutboundLink")],1)])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/danfengcao/binlog2sql.git\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" binlog2sql/\npip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -r requirements.txt\n")])])]),t("h3",{attrs:{id:"mysql必须设置参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql必须设置参数"}},[s._v("#")]),s._v(" MySQL必须设置参数")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nserver_id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nlog_bin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /var/log/mysql/mysql-bin.log\nmax_binlog_size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1G\nbinlog_format "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" row\nbinlog_row_image "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" full\n")])])]),t("h3",{attrs:{id:"user需要的最小权限集合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user需要的最小权限集合"}},[s._v("#")]),s._v(" user需要的最小权限集合")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" super"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("replication")]),s._v(" client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("replication")]),s._v(" slave\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#建议授权")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REPLICATION")]),s._v(" SLAVE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REPLICATION")]),s._v(" CLIENT "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" \n")])])]),t("h3",{attrs:{id:"查看目前的binlog文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看目前的binlog文件"}},[s._v("#")]),s._v(" 查看目前的binlog文件")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" master logs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ul",[t("li",[s._v("查询结果")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("Log_name")]),s._v(" "),t("th",[s._v("File_size")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("mysql-bin.000001")]),s._v(" "),t("td",[s._v("177")])]),s._v(" "),t("tr",[t("td",[s._v("mysql-bin.000002")]),s._v(" "),t("td",[s._v("437")])]),s._v(" "),t("tr",[t("td",[s._v("mysql-bin.000003")]),s._v(" "),t("td",[s._v("685")])]),s._v(" "),t("tr",[t("td",[s._v("mysql-bin.000004")]),s._v(" "),t("td",[s._v("1702399")])]),s._v(" "),t("tr",[t("td",[s._v("mysql-bin.000005")]),s._v(" "),t("td",[s._v("963964")])]),s._v(" "),t("tr",[t("td",[s._v("mysql-bin.000006")]),s._v(" "),t("td",[s._v("13118637")])]),s._v(" "),t("tr",[t("td",[s._v("mysql-bin.000007")]),s._v(" "),t("td",[s._v("26765043")])])])]),s._v(" "),t("h3",{attrs:{id:"定位误操作sql的binlog位置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定位误操作sql的binlog位置"}},[s._v("#")]),s._v(" 定位误操作SQL的binlog位置")]),s._v(" "),t("blockquote",[t("p",[s._v("可以看到最新的binlog文件是mysql-bin.000007，我们再定位误操作SQL的binlog位置")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# `binlog2sql.py`文件在`binlog2sql/binlog2sql/`文件夹下")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果命令最后不加时间可输出最近操作的SQL命令")]),s._v("\npython binlog2sql/binlog2sql.py -h127.0.0.1 -P端口 -u账号 -p"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'密码'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -d数据库 -t表 --start-file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'binlog文件'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --start-datetime"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'之前误操作的SQL执行开始时间'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --stop-datetime"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'之前误操作的SQL执行结束时间'")]),s._v("\n")])])]),t("blockquote",[t("p",[s._v("当程序跑完之后看最后一条数据最末尾："),t("code",[s._v("#start 5117865 end 13679060 time 2018-06-12 10:07:53")]),s._v("\n开始位置（start 5117865）和结束位置（end 13679060）")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/MySQL_binlog.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"生成sql文件回滚"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成sql文件回滚"}},[s._v("#")]),s._v(" 生成sql文件回滚")]),s._v(" "),t("blockquote",[t("p",[s._v("生成"),t("code",[s._v("rollback.sql")]),s._v("文件，并检查回滚SQL是否正确")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("python binlog2sql/binlog2sql.py -h127.0.0.1 -P端口 -u账号 -p"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'密码'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -d数据库 -t表 --start-file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'binlog文件'")]),s._v(" --start-position"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("开始位置 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --stop-position"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("结束位置 -B "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" rollback.sql\n")])])]),t("blockquote",[t("p",[s._v("查看当前文件夹下是否生成了rollback.sql文件,确认回滚SQL正确，如果有就执行回滚")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysql -h127.0.0.1 -P端口 -u账号 -p"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'密码'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" rollback.sql\n")])])]),t("h3",{attrs:{id:"不生成sql文件回滚"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不生成sql文件回滚"}},[s._v("#")]),s._v(" 不生成sql文件回滚")]),s._v(" "),t("blockquote",[t("p",[s._v("不生成rollback.sql文件，执行命令后在输出中检查回滚SQL是否正确")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("python binlog2sql/binlog2sql.py -h127.0.0.1 -P端口 -u账号 -p"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'密码'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -d数据库 -t表 --start-file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'binlog文件'")]),s._v(" --start-position"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("开始位置 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --stop-position"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("结束位置 -B\n")])])]),t("blockquote",[t("p",[s._v("确认回滚SQL正确，执行回滚语句。登录MySQL确认，数据回滚成功。")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("python binlog2sql/binlog2sql.py -h127.0.0.1 -P端口 -u账号 -p"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'密码'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -d数据库 -t表 --start-file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'binlog文件'")]),s._v(" --start-position"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("开始位置 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --stop-position"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("结束位置 -B "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mysql -h127.0.0.1 -P端口 -u账号 -p"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'密码'")]),s._v("\n")])])]),t("h2",{attrs:{id:"mysqldump"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysqldump"}},[s._v("#")]),s._v(" mysqldump")]),s._v(" "),t("blockquote",[t("p",[s._v("如果是在本机上备份本机的数据库地址和端口可以不要，如果是在本机上备份其他主机上的数据库就需要地址和端口")])]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"/files/MySQL%E5%A4%87%E4%BB%BD%E5%B9%B6%E5%88%A0%E9%99%A4%E5%8E%86%E5%8F%B2.sh"}},[s._v("MySQL备份并删除历史.sh")])]),s._v(" "),t("li",[t("a",{attrs:{href:"/files/MySQL%E5%90%8C%E6%AD%A5%E8%BF%9C%E7%A8%8B%E6%95%B0%E6%8D%AE%E5%BA%93%E5%88%B0%E6%9C%AC%E5%9C%B0.sh"}},[s._v("MySQL同步远程数据库到本地.sh")])])]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("mysqldump")]),s._v("命令需要手动输入密码，所以一般不输入"),t("code",[s._v("-p")]),s._v("参数")])]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://blog.csdn.net/hao7030187/article/details/77839968",target:"_blank",rel:"noopener noreferrer"}},[s._v("mysqldump数据导出参数说明"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"http://www.cnblogs.com/chenmh/p/5300370.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("mysqldump数据导出参数说明"),t("OutboundLink")],1)])]),s._v(" "),t("p",[t("strong",[s._v("参数说明")])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("-d")]),s._v(" 结构(--no-data:不导出任何数据，只导出数据库表结构)")]),s._v(" "),t("li",[t("code",[s._v("-t")]),s._v(" 数据(--no-create-info:只导出数据，而不添加CREATE TABLE 语句)")]),s._v(" "),t("li",[t("code",[s._v("-n")]),s._v(" (--no-create-db:只导出数据，而不添加CREATE DATABASE 语句）")]),s._v(" "),t("li",[t("code",[s._v("-R")]),s._v(" (--routines:导出存储过程以及自定义函数)")]),s._v(" "),t("li",[t("code",[s._v("-E")]),s._v(" (--events:导出事件)")]),s._v(" "),t("li",[t("code",[s._v("--triggers")]),s._v(" (默认导出触发器，使用--skip-triggers屏蔽导出)")]),s._v(" "),t("li",[t("code",[s._v("-B")]),s._v(" (--databases:导出数据库列表，单个库时可省略）")]),s._v(" "),t("li",[t("code",[s._v("--tables")]),s._v(" 表列表（单个表时可省略）\n"),t("ul",[t("li",[s._v("①同时导出结构以及数据时可同时省略-d和-t")]),s._v(" "),t("li",[s._v("②同时不导出结构和数据可使用-ntd")]),s._v(" "),t("li",[s._v("③只导出存储过程和函数可使用-R -ntd")]),s._v(" "),t("li",[s._v("④导出所有(结构&数据&存储过程&函数&事件&触发器)使用-R -E(相当于①，省略了-d -t;触发器默认导出)")]),s._v(" "),t("li",[s._v("⑤只导出结构&函数&事件&触发器使用 -R -E -d")])])]),s._v(" "),t("li",[t("code",[s._v("--opt")]),s._v("等同于以下参数，该选项默认开启， 可以用--skip-opt禁用\n"),t("ul",[t("li",[t("code",[s._v("--add-drop-table")])]),s._v(" "),t("li",[t("code",[s._v("--add-locks")])]),s._v(" "),t("li",[t("code",[s._v("--create-options")])]),s._v(" "),t("li",[t("code",[s._v("--quick")])]),s._v(" "),t("li",[t("code",[s._v("--extended-insert")])]),s._v(" "),t("li",[t("code",[s._v("--lock-tables")])]),s._v(" "),t("li",[t("code",[s._v("--set-charset")])]),s._v(" "),t("li",[t("code",[s._v("--disable-keys")])])])])]),s._v(" "),t("ol",[t("li",[s._v("--opt 在创建表结构之前 会有 DROP TABLE IF EXISTS")]),s._v(" "),t("li",[s._v("原表在创建的时候指定了AUTO_INCREMENT，在使用了--opt 仍然和建表时候一样存在参数，在使用参数--skip-opt的时候，忽略了此参数AUTO_INCREMENT")]),s._v(" "),t("li",[s._v("在使用参数--opt的时候，创建表的类型，字符集等等都是默认参数ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;当使用了--skip-opt的时候，这些参数都给忽略了")]),s._v(" "),t("li",[s._v("导出原表中的数据，--opt是一个insert多个value，在使用了--skip-opt的时候，是多个insert组成的；")])]),s._v(" "),t("h3",{attrs:{id:"mysqldump导出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysqldump导出"}},[s._v("#")]),s._v(" mysqldump导出")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只导出结构&函数&事件&触发器使用")]),s._v("\nmysqldump -R -E -d -h需要备份的主机地址 -P端口 -u用户名 -p 数据库名 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /home/backup.sql\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只导出存储过程和函数可使用")]),s._v("\nmysqldump -R -ntd -h需要备份的主机地址 -P端口 -u用户名 -p 数据库名 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /home/backup.sql\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导出单个数据库中所有(结构&数据&存储过程&函数&事件&触发器)到sql文件")]),s._v("\nmysqldump -R -E -h需要备份的主机地址 -P端口 -u用户名 -p 数据库名 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /home/backup.sql\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mysqldump 备份并压缩sql文件")]),s._v("\nmysqldump -R -E -h主机地址 -P端口 -u用户名 -p 数据库名 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("gzip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /home/backup.sql.gz\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 备份所有的数据库到一个sql文件")]),s._v("\nmysqldump -R -E -h主机地址 -P端口 -u用户名 -p --all-databases "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /home/all.sql\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从一个数据库导出到另一个数据库")]),s._v("\nmysqldump -R -E -u用户名 -p 数据库名 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mysql 新数据库名 -u用户名 -p密码\n")])])]),t("ul",[t("li",[s._v("如果提示如下错误，执行"),t("code",[s._v("vi /etc/my.cnf")])])]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("mysqldump: [Warning] Using a password on the command line interface can be insecure")])])]),s._v(" "),t("div",{staticClass:"language-ini extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# [mysqldump]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("client")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看mysql.scok位置 netstat -ln | grep mysql")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#socket = /tmp/mysql.scok")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("default-character-set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("utf8mb4")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("host")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("127.0.0.1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("root")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("password")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("'"),t("span",{pre:!0,attrs:{class:"token inner-value"}},[s._v("123")]),s._v("'")]),s._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导出")]),s._v("\nmysqldump --defaults-extra-file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/my.cnf 新数据库名 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" database.sql\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导入")]),s._v("\nmysql --defaults-extra-file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/my.cnf 新数据库名 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" database.sql\n")])])]),t("div",{staticClass:"language-batch extra-class"},[t("pre",{pre:!0,attrs:{class:"language-batch"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("@")]),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" off")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v(":: 存储sql脚本文件的目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dirPath=D:\\mysql_backup"')])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v(":: 数据库名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"databaseName=demo"')])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v(":: 设置时间变量")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Ymd=%date:~0,4%%date:~5,2%%date:~8,2%"')])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v(":: 创建存储的文件夹")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exist")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%dirPath%")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("md")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%dirPath%")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v(":: 执行备份操作")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mysqldump")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[s._v("--opt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[s._v("--user")]),s._v("=root "),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[s._v("--password")]),s._v("=root "),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[s._v("--host")]),s._v("="),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127")]),s._v("."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[s._v("--protocol")]),s._v("=tcp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[s._v("--port")]),s._v("="),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[s._v("--default-character-set")]),s._v("=utf8 "),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[s._v("--single-transaction")]),s._v("=TRUE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[s._v("--routines")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[s._v("--events")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%databaseName%")]),s._v(" >D:\\mysql_backup\\backup_demo_"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%Ymd%")]),s._v(".sql")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v(":: 从文件夹或树中选择要进行批处理的文件，删除两周前的备份数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("forfiles")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[s._v("/p")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%dirPath%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[s._v("/m")]),s._v(" backup_*.sql "),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[s._v("-d")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("-14")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[s._v("/c")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cmd /c del /f @path"')])]),s._v("\n")])])]),t("h3",{attrs:{id:"mysqldump导入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysqldump导入"}},[s._v("#")]),s._v(" mysqldump导入")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用mysqldump导入本地sql文件")]),s._v("\nmysqldump -h主机地址 -P端口 -u用户名 数据库名 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" /home/backup.sql\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mysql直接用压缩文件恢复")]),s._v("\ngunzip "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" backup.sql.gz "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mysql -h主机地址 -P端口 -u用户名 -p密码 数据库名\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mysql从本地sql文件导入")]),s._v("\nmysql -h主机地址 -P端口 -u用户名 -p密码 数据库名 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" backupfile.sql\n")])])]),t("h3",{attrs:{id:"mysqldump两台主机同步备份"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysqldump两台主机同步备份"}},[s._v("#")]),s._v(" mysqldump两台主机同步备份")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysqldump -R -E -h导出的主机地址 -P端口 -u用户名 -p 数据库名 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mysql -h导入的主机地址 -P端口 -u用户名 -p密码 -C 数据库名\n")])])]),t("h2",{attrs:{id:"source命令导入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#source命令导入"}},[s._v("#")]),s._v(" source命令导入")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入MySQL并指定数据库")]),s._v("\nuse 数据库名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导入数据（注意sql文件的路径）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /home/backup.sql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"主从同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主从同步"}},[s._v("#")]),s._v(" 主从同步")]),s._v(" "),t("h3",{attrs:{id:"配置主服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置主服务器"}},[s._v("#")]),s._v(" 配置主服务器")]),s._v(" "),t("p",[t("strong",[s._v("在[mysqld]节点下按需添加")])]),s._v(" "),t("div",{staticClass:"language-conf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[mysqld]\n# 设置server_id，一般设置为IP,注意要唯一\nserver_id=100\n# 复制过滤：也就是指定数据库不用同步,多个之间用','号分割\nbinlog-ignore-db=mysql,information_schema,preformance_schema\n# 指定需要同步的二进制数据库\nbinlog-do-db=test\n# 开启二进制日志功能，可以随便取，最好有含义（关键就是这里了）\nlog-bin=edu-mysql-bin\n# 为每个session 分配的内存，在事务过程中用来存储二进制日志的缓存\nbinlog_cache_size=1M\n# 主从复制的格式（mixed,statement,row，默认格式是statement）\nbinlog_format=mixed\n# 二进制日志自动删除/过期的天数。默认值为0，表示不自动删除。\nexpire_logs_days=5\n# 跳过主从复制中遇到的所有错误或指定类型的错误，避免slave端复制中断。\n# 如：1062错误是指一些主键重复，1032错误是因为主从数据库数据不一致\nslave_skip_errors=1062\n")])])]),t("p",[t("strong",[s._v("创建数据同步用户")])]),s._v(" "),t("blockquote",[t("p",[s._v("这里主要是要授予用户REPLICATION SLAVE权限和REPLICATION CLIENT权限")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXISTS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'slave'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),s._v(" IDENTIFIED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'密码'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REPLICATION")]),s._v(" SLAVE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REPLICATION")]),s._v(" CLIENT "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'slave'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nFLUSH "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIVILEGES")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h3",{attrs:{id:"配置从服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置从服务器"}},[s._v("#")]),s._v(" 配置从服务器")]),s._v(" "),t("p",[t("strong",[s._v("在[mysqld]节点下按需添加")])]),s._v(" "),t("blockquote",[t("p",[s._v("从库中的"),t("code",[s._v("server-id")]),s._v("值一定不要跟主库的一样")])]),s._v(" "),t("div",{staticClass:"language-conf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[mysqld]\n# 设置server_id，一般设置为IP,注意要唯一\nserver_id=101\n# 复制过滤：也就是指定数据库不用同步,多个之间用','号分割\nbinlog-ignore-db=mysql,information_schema,preformance_schema\n# 指定需要同步的二进制数据库\nbinlog-do-db=test\n# 开启二进制日志功能，以备Slave作为其它Slave的Master时使用\nlog-bin=edu-mysql-slave1-bin\n# 为每个session 分配的内存，在事务过程中用来存储二进制日志的缓存\nbinlog_cache_size=1M\n# 主从复制的格式（mixed,statement,row，默认格式是statement）\nbinlog_format=mixed\n# 二进制日志自动删除/过期的天数。默认值为0，表示不自动删除。\nexpire_logs_days=5\n# 跳过主从复制中遇到的所有错误或指定类型的错误，避免slave端复制中断。\n# 如：1062错误是指一些主键重复，1032错误是因为主从数据库数据不一致\nslave_skip_errors=1062\n# relay_log配置中继日志\nrelay_log=edu-mysql-relay-bin\n# log_slave_updates表示slave将复制事件写进自己的二进制日志\nlog_slave_updates=1\n# 防止改变数据(除了特殊的线程)\nread_only=1\n")])])]),t("p",[t("strong",[s._v("先查询主服务器当前二进制log文件")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" MASTER "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("STATUS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ul",[t("li",[s._v("查询出来如下")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("File")]),s._v(" "),t("th",[s._v("Position")]),s._v(" "),t("th",[s._v("Binlog_Do_DB")]),s._v(" "),t("th",[s._v("Binlog_Ignore_DB")]),s._v(" "),t("th",[s._v("Executed_Gtid_Set")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("mysql-bin.000025")]),s._v(" "),t("td",[s._v("154")]),s._v(" "),t("td",[s._v("ichangg_im")]),s._v(" "),t("td"),s._v(" "),t("td")])])]),s._v(" "),t("p",[t("strong",[s._v("进入从服务器MySQL执行以下命令")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("CHANGE MASTER "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" MASTER_HOST"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'主服务器IP'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("MASTER_PORT"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("MASTER_USER"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'主服务器同步用户名'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("MASTER_PASSWORD"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'密码'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("MASTER_LOG_FILE"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'主MySQL二进制文件名'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("MASTER_LOG_POS"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Position字段中数据"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("MASTER_CONNECT_RETRY"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ul",[t("li",[t("code",[s._v("MASTER_HOST='192.168.1.100'")]),s._v(" #Master的IP地址")]),s._v(" "),t("li",[t("code",[s._v("MASTER_USER='slave'")]),s._v(" #用于同步数据的用户（在Master中授权的用户）")]),s._v(" "),t("li",[t("code",[s._v("MASTER_PASSWORD='123456'")]),s._v(" #同步数据用户的密码")]),s._v(" "),t("li",[t("code",[s._v("MASTER_PORT=3306")]),s._v(" #Master数据库服务的端口")]),s._v(" "),t("li",[t("code",[s._v("MASTER_LOG_FILE='edu-mysql-bin.000001'")]),s._v(" #指定Slave从哪个日志文件开始读复制数据（Master上执行命令的结果的File字段）")]),s._v(" "),t("li",[t("code",[s._v("MASTER_LOG_POS=429")]),s._v(" #从哪个POSITION号开始读（Master上执行命令的结果的Position字段）")]),s._v(" "),t("li",[t("code",[s._v("MASTER_CONNECT_RETRY=30")]),s._v(" #当建立主从连接时，如果连接建立失败，间隔多久后重试。单位为秒，默认设置为60秒，同步延迟调优参数。")])]),s._v(" "),t("p",[t("strong",[s._v("查看主从同步状态")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" slave "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[t("strong",[s._v("开启复制")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("START")]),s._v(" SLAVE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h3",{attrs:{id:"如果出现以下错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如果出现以下错误"}},[s._v("#")]),s._v(" 如果出现以下错误")]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("ERROR 1872 (HY000): Slave failed to initialize relay log info structure from the repository")])])]),s._v(" "),t("blockquote",[t("p",[s._v("看样子是找不到中继日志的仓库，但是查看变量"),t("code",[s._v("relay log")]),s._v("的位置是设置了的")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" variables "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'relay%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ul",[t("li",[s._v("重置复制信息")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("RESET MASTER"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ul",[t("li",[s._v("查看主从复制是否还有主从配置")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" SLAVE "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("STATUS")]),s._v("\\G\n")])])]),t("ul",[t("li",[s._v("如果还有就执行以下命令清除所有")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("RESET SLAVE "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ul",[t("li",[s._v("再次开启复制")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("START")]),s._v(" SLAVE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ul",[t("li",[s._v("查看主从复制是否成功")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" SLAVE "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("STATUS")]),s._v("\\G\n")])])]),t("p",[t("strong",[s._v("Operation CREATE USER failed")])]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("Error 'Operation CREATE USER failed for 'slave'@'%'' on query. Default database: ''. Query:")])]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("'CREATE USER 'slave'@'%' IDENTIFIED WITH 'mysql_native_password' AS '*040A65A51A0B047A826CDE05448536015D471E15''")])])])]),s._v(" "),t("ul",[t("li",[s._v("先执行以下命令")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("STOP SLAVE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nFLUSH "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIVILEGES")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("START")]),s._v(" SLAVE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ul",[t("li",[s._v("如果错误仍然存在，执行以下命令")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("STOP SLAVE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'slave'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("START")]),s._v(" SLAVE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);