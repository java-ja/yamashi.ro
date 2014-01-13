# 第一回チキチキjava-ja ymsr送別会

このリポジトリは、[yamashi.ro](http://yamashi.ro)のサイトを生成する為のリソースがコミットされているリポジトリです。

コミットがこのリポジトリのmasterブランチにマージされると[wercker](http://wercker.com/)でビルドされて、S3のyamashi.roバケットにデプロイされます。

## ビルドについて

現在は、[hugo](http://hugo.spf13.com/)でサイトをビルドしています。

hugoはgoで実装されたStatic Site Generatorで、多くのプラットフォーム実行可能なバイナリをきちんとリリースしている為、すぐに使いはじめられます。

- [hugoのダウンロード](https://github.com/spf13/hugo/releases)

## 利用サービスについて

### ドメイン名
yamashi.roは太一の個人的な支払いによって取得したドメイン名です

### wercker
ビルドで特に複雑なことはしていないため、太一がサインアップしたwerckerのアカウントでビルドしています。

### AWS

現時点で利用しているAWSのサービスは、

- Route53
- S3

です。

他のAWSサービスを利用したり、yamashi.roのサブドメインを利用したい場合は、太一に相談してください。基本的に対応します。

尚、AWSにおける支払いは現時点ではごく少ないため太一が支払いします。
