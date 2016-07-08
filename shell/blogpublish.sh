cd /Users/superstarwulin/Sites/workstation/myWorkSpace/superstarwulin.github.io;
sudo chown -R superstarwulin /Users/superstarwulin/Sites/workstation/myWorkSpace/superstarwulin.github.io;
sudo hexo generate
git add -A;
git status;
git commit -a -m "update";
sudo hexo deploy;