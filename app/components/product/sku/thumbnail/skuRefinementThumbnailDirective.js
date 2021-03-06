module.exports = function() {
    return {
        transclude: true,
        restrict: 'E',
        templateUrl: '/app/components/product/sku/thumbnail/skuRefinementThumbnailTemplate.html',
        scope: {
            parentindex: '=',
            product: '='
        },
        controller: require('./skuRefinementThumbnailController')
    };
};
