git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.iyarn docs:devo
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:mischieff/blog.git master:gh-pages

cd -

#git add .
#git commit -m "提交说明"
#git push origin master

#npm run deploy