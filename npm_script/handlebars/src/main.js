import $ from 'jquery';
// webpack  一切都可打包
import template from '../template/user.hbs'
const user = {
    name: 'dog',
    age: '3',
    photo: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=626256303,1739764318&fm=27&gp=0.jpg'
}

$(function() {
    console.log('ready');
    let item = $(template(user));
    item.appendTo($('#root'));
})