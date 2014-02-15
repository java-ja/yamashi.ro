var opened = [];

$(document).ready(function(){

    $(function () {
        var ranks = getRank();
        for (var i = 0; i < 20; i = i + 1){
            $('td#base' + i).click({num:ranks[i]}, open);
            $('div#word').click(close);
        }
    });
    
    function getRank(){
        // 31=ジョーカー, 111～119=重複する11～19
        var one = _.times(31, function(n){ return n + 1; });
        var two = _.times(9, function(n){ return n + 111; });
        var ranks = _.sample(one.concat(two), 20);
        return ranks;
    };
    
    function convert(n){
        var rank = n;
        if(rank === 31) {
            rank = '★';
        } else if (100 < rank) {
            rank = rank - 100;
        }
        return rank;
    };
    
    function open(eo){
        $('#word').show();
        $('.rank').empty();
        
        var imgurl = '/assets/img/word' + eo.data.num + '.png';
        $('#word').css('background-image', 'url(' + imgurl + ')');
        
        var rank = convert(eo.data.num);
        $('.rank').append(rank);
        
        $('div#space').hide();
        opened.push({num:eo.data.num,el:this});
    };
    
    function close(){
        for (var i = 0; i < opened.length; i = i + 1){
            obj = opened[i];
            $('td#' + $(obj.el).attr("id")).removeClass("closed");
            $('td#' + $(obj.el).attr("id")).text(convert(obj.num));
            $('td#' + $(obj.el).attr("id")).addClass("opened");
        }
        $('div#word').hide();
        $('div#space').show();
    };
});