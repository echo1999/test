app = Flask(__name__, static_folder='views/statics')
app = Flask(__name__, static_url_path='')

# 上传图片
@app.route('/pic.upload', methods=['GET'])
def PicUpload():
      const { putPolicy, mac } = qiniuServer
  const token = putPolicy.uploadToken(mac)
  res.header('Cache-Control', 'max-age=0, private, must-revalidate')
  res.header('Pragma', 'no-cache')
  res.header('Expires', 0)
  if (token) {
    res.json({
      ok: true,
      uptoken: token,
      domain: config.qiniu.Domain,
    })
  }
    return "ok"
    
# 清空文件夹
@app.route('/show.reStart', methods=['GET'])
def reStart():
    # 删除抠人像文件夹
    cut_path = './static/image/cut'
    shutil.rmtree(cut_path)  # 能删除该文件夹和文件夹下所有文件
    os.mkdir(cut_path)
    # 删除用户选中图片文件夹
    temp_path = './static/image/temp'
    if os.path.exists(temp_path):
        shutil.rmtree(temp_path)  # 能删除该文件夹和文件夹下所有文件
        print("删除temp")
    os.mkdir(temp_path)    #新建temp文件夹
    print("新建temp")
    # 删除融合结果图
    res_path = './static/image/resultPic'
    shutil.rmtree(res_path)  # 能删除该文件夹和文件夹下所有文件
    os.mkdir(res_path)
    return "ok"