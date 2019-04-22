var shell = require('shelljs');
try {
  hexo.on('deployAfter', function() {
    //当deploy完成后执行备份
    run();
  });
} catch (e) {
  console.log('产生了一个错误<(￣3￣)> !，错误详情为：' + e.toString());
}

function run() {
  if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    shell.exit(1);
  } else {
    shell.echo(
      '==================Auto Backup Begin=============================='
    );
    if (shell.exec('hexo b').code !== 0) {
      shell.echo('Error: Git add failed');
      shell.exit(1);
    }
    shell.echo(
      '==================Auto Backup Complete============================'
    );
    shell.echo(
      '==================Auto Backup Complete============================'
    );
  }
}
