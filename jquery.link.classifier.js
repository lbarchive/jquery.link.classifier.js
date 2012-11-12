/**
 * @preserve  linkcls
 * @name      jquery.link.classifier.js
 * @author    Yu-Jie Lin
 * @version   0.1
 * @date      11-12-2012
 * @copyright (c) 2012 Yu-Jie Lin
 * @license   MIT License
 * @homepage  https://github.com/livibetter/jquery.link.classifier
*/
; (function ($) {
  $.linkcls = {
    defaults: {
      },
    sites: {
      facebook:   /facebook\.com$/,
      flickr:     /flickr\.com$/,
      github:     /github\.com$/,
      gplus:      /plus\.google\.com$/,
      twitter:    /twitter\.com$/,
      wikipedia:  /wikipedia\.org$/,
      youtube:    /youtube\.com$/
      }
    }

  $.fn.linkcls = function (options) {
    var Opts = jQuery.extend($.linkcls.defaults, options);

    this.each(function () {
      // only accept anchors
      if (this.nodeName != 'A') return;

      var $a = $(this);
      // do not process twice
      if ($a.hasClass('lc')) return;

      if (this.href.replace(this.hash, '') == location.href.replace(location.hash, ''))
        $a.addClass('in-page');

      // file extension
      var file = /.*\.(.+)/.exec(this.pathname);
      if (file) {
        file = file[1];
        $a.addClass(file);
        }

      // sites
      for (var site in $.linkcls.sites)
        if ($.linkcls.sites[site].test(this.hostname))
          $a.addClass(site);

      // host/hostname only seem to parsed for HTTP and FTP.
      if (this.hostname && location.hostname)
        $a.addClass((this.hostname == location.hostname) ? 'internal' : 'external');

      $a
        .addClass(this.protocol.replace(':', ''))
        .addClass('lc')
        ;
    });
    
    return this;
  };
})(jQuery);
