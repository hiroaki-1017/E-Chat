<template>
  <div class="registerContainer">
    <div class="registerMain">
      <h2 class="registerText">プロフィール登録</h2>
      <form>
        <div class="registerUserImgField">
          <div class="registerUserImg">
            <template v-if="form.imageUrl.val">
              <img :src="form.imageUrl.val" class="w-32 h-32 object-cover border rounded-full" @click="selectImage"/>
            </template>

            <template v-else>
            <i class="material-icons userImgIcon" @click="selectImage">person</i>
            </template>
            <input
              ref="image"
              type="file"
              style="display: none"
              accept="image/*"
              @change="onSelectFile"
            />
          </div>
        </div>
        <label class="registerUserName">ユーザーネーム</label>
        <div class="registerNameField">
          <input type="text" class="nameTextField" />
        </div>
        <div class="registerButton">
          <button class="registerCheck">登録</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        imageUrl: {
          val: null,
        },
      },
    };
  },
  methods: {
    selectImage() {
      this.$refs.image.click();
    },
  },
  onSelectFile(e) {
    const files = e.target.files;
    if (files.length === 0) return;

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.addEventListener("load", () => {
      this.upload({
        localImageFile: files[0],
      });
    });
  },
  async upload({ localImageFile }) {
    const user = await this.$auth();

    // 未ログインの場合
    if (!user) this.$router.push("/login");

    // // ストレージオブジェクト作成
    const storageRef = this.$fireStorage.ref();

    // ファイルのパスを設定
    const imageRef = storageRef.child(
      `images/${user.uid}/${localImageFile.name}`
    );

    // ファイルを適用してファイルアップロード開始
    const snapShot = await imageRef.put(localImageFile);
    this.form.imageUrl.val = await snapShot.ref.getDownloadURL();
  },
};
</script>

<style>
.registerContainer {
  padding: 20px 0;
}

.registerMain {
  text-align: center;
  /* background-color: #F7F7F7; */
  width: 85%;
  margin: 0 auto;
  padding: 20px;
}

.registerText {
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 10%;
  margin-bottom: 20%;
}

.registerUserImgField {
  margin: 10%;
}

.registerUserImg {
  border: solid 1px #888888de;
  border-radius: 50%;
  width: 55%;
  margin: 0 auto;
}

.userImgIcon {
  height: 40px;
  width: 40px;
  padding: 60px 0;
}

.registerUserName {
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 5%;
}

.registerButton {
  margin: 20% 0;
}
</style>
