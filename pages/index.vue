<template>
    <div>
        <h1>実装済み機能一覧</h1>
        <ul>
            <li><nuxt-link to="/news/">ニュース一覧</nuxt-link></li>
            <li><nuxt-link to="/news_paginated/">ニュースwithページネーション</nuxt-link></li>
            <li><nuxt-link to="/form/form_validate/">フォームバリデーション</nuxt-link></li>
            <li><nuxt-link to="/form/form_default/">フォームデフォルト</nuxt-link></li>
            <li><nuxt-link to="/form/form_single_choose/">フォーム選択</nuxt-link></li>
            <li><nuxt-link to="/form/form_single_choose_date/">フォーム選択＋日付</nuxt-link></li>
            <li><nuxt-link to="/form/form_single_choose_date_file/">フォーム選択＋日付＋ファイル</nuxt-link></li>
            <li><nuxt-link to="/news/preview/">プレビュー</nuxt-link></li>
            <li><nuxt-link to="/news/test_with_comment_nodelete/">コメント(削除機能無し)</nuxt-link></li>
            <li><nuxt-link to="/news/test_with_comment_delkey/">コメント(delkeyで削除)</nuxt-link></li>
            <li><nuxt-link to="/news/test_with_comment_login/">コメント(要ログイン)</nuxt-link></li>
            <li><nuxt-link to="/subscribe_with_key/">配信購読(キー)</nuxt-link></li>
            <li><nuxt-link to="/subscribe_with_key/unsubscribe/">配信解除(キー)</nuxt-link></li>
            <li><nuxt-link to="/subscribe_with_login/">配信購読・解除(要ログイン)</nuxt-link></li>
            <li><nuxt-link to="/login/2step_login">2ステップログイン(email)</nuxt-link></li>
        </ul>
    </div>
</template>
  
  