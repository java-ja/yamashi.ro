# 第一回チキチキjava-ja ymsr送別会

このリポジトリは、[yamashi.ro](http://yamashi.ro)のサイトを生成する為のリソースがコミットされているリポジトリです。

コミットがこのリポジトリのmasterブランチにマージされると[wercker](http://wercker.com/)でビルドされて、S3のyamashi.roバケットにデプロイされます。

一人でサイトを充実させるのは、本当に大変なので**PRを強く強く希望します**。

## ビルドについて

現在は、[hugo](http://hugo.spf13.com/)でサイトをビルドしています。

hugoはgoで実装されたStatic Site Generatorで、多くのプラットフォームで実行可能なバイナリをきちんとリリースしている為、すぐに使いはじめられます。

- [hugoのダウンロード](https://github.com/spf13/hugo/releases)

hugoはjekyllクローンですが、jekyllよりも高速に動作します。

## 利用サービスについて

### ドメイン名
yamashi.roは太一の個人的な支払いによって取得したドメイン名です

### AWS

現時点で利用しているAWSのサービスは、

- Route53
- S3

です。

他のAWSサービスを利用したり、yamashi.roのサブドメインを利用したい場合は、太一に相談してください。基本的に対応します。

尚、AWSにおける支払いは現時点ではごく少ないため太一が支払いします。

### wercker
ビルドで特に複雑なことはしていないため、太一がサインアップした[wercker](http://wercker.com/)のアカウントでビルドしています。

コラボレータとして何か変更したい人は、[wercker](http://wercker.com/)にサインアップした上で[太一](http://twitter.com/ryushi)にDMを下さい。

[![wercker status](https://app.wercker.com/status/cced3ae771ca44b7d9baa34331657cff/m "wercker status")](https://app.wercker.com/project/bykey/cced3ae771ca44b7d9baa34331657cff)


### Tumblr(javajaymsrアカウント)
[tumblr.yamashi.ro](http://tumblr.yamashi.ro) は共同でReblogできますので、編集権が欲しい人は[太一](http://twitter.com/ryushi)にDMを下さい。

各人がymsrっぽいと思えるものなら何でもリブログする方向でお願いします。
