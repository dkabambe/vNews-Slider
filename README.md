#vNews Slider
vNews Slider is my first jQuery add-on which I coded to fill a gap I had whilst designing a website for a local charity. It's functional, though I haven't tested it fully.

It converts a standard Header - Content - Header - Content flat layout into a list of header links on the left with a content pane to the right. Unlike some other slider modules, this means your site will retain a natural reading flow should the user not have javascript.

It can automatically scroll through the content, (using customisable CSS styles to highlight current header item), or you can turn this off and leave it to the user to switch bewteen panes. When users hover over items it will stop the scrolling and just show the item in focus.

##Demo
See http://web.kabambe.uk/vNews

##Installing vNews Slider
vNews is currently reliant on jQuery and jQuery UI (just the datepicker component) so link to these scripts either locally or through a code warehouse. [I hope to remove the jQuery-UI dependency soon]

Then simply link to the vNews javascript and css, (Less than 3k minified), and initialise your containing object.

<pre><code>
&lt;html&gt;
&lt;head&gt;
	...
	&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"&gt;
	&lt;script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"&gt;

	&lt;script src="jquery.vNews.js"&gt;&lt;/script&gt;
	
	&lt;script&gt;
		$(document).ready( function() {
			$("#myID").vNews({
				option1: value1,
				option2: value2
			}
		});
	&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
...
&lt;div id="myID"&gt;
	&lt;h4 date="2017-06-15 12:30"&gt;Title One&lt;/h4&gt;
	&lt;div&gt;Content One&lt;/div&gt;
	&lt;h4&gt;Title Two&lt;/h4&gt;
	&lt;div&gt;Content Two&lt;/div&gt;
&lt;/div&gt;
...
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

##Customising
There are several options available to customise the slider such as which HTML tags you use for the header and content information, (as  long as they're different), the speed of the ticker (or whether to turn off). The demo file in the download contains the relevant information.

##Future Development

If any of you do find this useful I am open to ideas about future development, though my aim is to keep this as lightweight as possible, (hence my desire to remove jQuery UI dependency or at least make it optional). Again, within the [demo file](web.kabambe.uk/vNews) you can find more information about my thoughts so far.

##Usage (MIT License)

Copyright (c) 2017 dkabambe

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.