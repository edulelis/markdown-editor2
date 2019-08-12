
      // Initialize the editor.
      simplemde = new SimpleMDE({
        spellChecker: false,
        toolbar: [
          "bold", "italic", "strikethrough", "heading",
          "|",
          "quote", "unordered-list", "ordered-list",
          "|",
          "link",
          {
        		name: "image",
            action: function(editor) {
      			     wp.media.frame.open();
      			},
      			className: "fa fa-picture-o",
      			title: "Add image",
        	},
          "|",
          "preview",
          "side-by-side",
          "fullscreen",
          "guide"
        ],
        element: document.getElementById( 'content' )
      });
        //simplemde.createToolbar();

			// Change zIndex when toggle full screen.
			var change_zIndex = function( editor ) {

				// Give it some time to finish the transition.
				setTimeout( function() {
					var cm = editor.codemirror;
					var wrap = cm.getWrapperElement();
					if( /fullscreen/.test( wrap.previousSibling.className ) ) {
						document.getElementById( 'wp-content-editor-container' ).style.zIndex = 999999;
					} else {
						document.getElementById( 'wp-content-editor-container' ).style.zIndex = 1;
					}
				}, 2 );
			}

			var toggleFullScreenButton = document.getElementsByClassName( 'fa-arrows-alt' );
			toggleFullScreenButton[0].onclick = function() {
				SimpleMDE.toggleFullScreen( simplemde );
				change_zIndex( simplemde );
			}

			var toggleSideBySideButton = document.getElementsByClassName( 'fa-columns' );
			toggleSideBySideButton[0].onclick = function() {
				SimpleMDE.toggleSideBySide( simplemde );
				change_zIndex(simplemde);
			}

			var helpButton = document.getElementsByClassName( 'fa-question-circle' );
			helpButton[0].href = 'https://guides.github.com/features/mastering-markdown/';

			if ( typeof jQuery !== 'undefined' ) {
				jQuery( document ).ready( function() {

					// Integrate with WP Media module.
					var original_wp_media_editor_insert = wp.media.editor.insert;
					wp.media.editor.insert = function( html ) {
						original_wp_media_editor_insert( html );
						simplemde.codemirror.replaceSelection( html );
					}

          wp.media.editor.add('content').on('insert',function(n){
            simplemde.codemirror.focus();
          });

				} );
			}

        simplemde.codemirror.on("refresh", function(){
            if(simplemde.isFullscreenActive()) {
                $('body').addClass('mde-fullscreen');
            } else {
                $('body').removeClass('mde-fullscreen');
            }
        });

        /*
        wp.media.editor.add('content').on('all',function(n){
          console.log(n);
        });
        */
