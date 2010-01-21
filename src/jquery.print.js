
  
  

  


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
  <head>
    <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
        <title>lib/jquery.print.js at master from tmm1's screw-unit - GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="http://github.com/fluidicon.png" title="GitHub" />

    <link href="http://assets3.github.com/stylesheets/bundle_common.css?1a51c3e040096de7494f18310df24722179d530b" media="screen" rel="stylesheet" type="text/css" />
<link href="http://assets2.github.com/stylesheets/bundle_github.css?1a51c3e040096de7494f18310df24722179d530b" media="screen" rel="stylesheet" type="text/css" />

    <script type="text/javascript" charset="utf-8">
      var GitHub = {}
      var github_user = null
    </script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js" type="text/javascript"></script>
    <script src="http://assets1.github.com/javascripts/bundle_common.js?1a51c3e040096de7494f18310df24722179d530b" type="text/javascript"></script>
<script src="http://assets1.github.com/javascripts/bundle_github.js?1a51c3e040096de7494f18310df24722179d530b" type="text/javascript"></script>

        <script type="text/javascript" charset="utf-8">
      GitHub.spy({
        repo: "tmm1/screw-unit"
      })
    </script>

    
  
    
  

  <link href="http://github.com/feeds/tmm1/commits/screw-unit/master" rel="alternate" title="Recent Commits to screw-unit:master" type="application/atom+xml" />

    <meta name="description" content="A Javascript BDD Framework with nested describes, a convenient assertion syntax, and an intuitive test browser." />
    <script type="text/javascript">
      GitHub.nameWithOwner = GitHub.nameWithOwner || "tmm1/screw-unit";
      GitHub.currentRef = "master";
    </script>
  

            <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-3769691-2']);
      _gaq.push(['_trackPageview']);
      (function() {
        var ga = document.createElement('script');
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        ga.setAttribute('async', 'true');
        document.documentElement.firstChild.appendChild(ga);
      })();
    </script>

  </head>

  

  <body>
    

    

    <div class="subnavd" id="main">
      <div id="header" class="pageheaded">
        <div class="site">
          <div class="logo">
            <a href="http://github.com"><img src="/images/modules/header/logov3.png" alt="github" /></a>
          </div>
          
          <div class="topsearch">
  
    <form action="/search" id="top_search_form" method="get">
      <a href="/search" class="advanced-search tooltipped downwards" title="Advanced Search">Advanced Search</a>
      <input type="search" class="search repo_autocompleter" name="q" results="5" placeholder="Search GitHub&hellip;" /> <input type="submit" value="Search", class="button" />
      <input type="hidden" name="type" value="Everything" />
      <input type="hidden" name="repo" value="" />
      <input type="hidden" name="langOverride" value="" />
      <input type="hidden" name="start_value" value="1" />
    </form>
  
  
    <ul class="nav logged_out">
      
        <li><a href="http://github.com">Home</a></li>
        <li class="pricing"><a href="/plans">Pricing and Signup</a></li>
        <li><a href="http://github.com/popular/forked">Explore GitHub</a></li>
        
        <li><a href="/blog">Blog</a></li>
      
      <li><a href="https://github.com/login">Login</a></li>
    </ul>
  
</div>
        </div>
      </div>

      
      
        
    <div class="site">
      <div class="pagehead repohead vis-public">
        <h1>
          <a href="/tmm1">tmm1</a> / <strong><a href="http://github.com/tmm1/screw-unit">screw-unit</a></strong>
          
            <span class="fork-flag">
              <span class="text">forked from <a href="/nkallen/screw-unit">nkallen/screw-unit</a></span>
            </span>
          
          
        </h1>

        
    <ul class="actions">
      
      
        <li class="for-owner" style="display:none"><a href="https://github.com/tmm1/screw-unit/edit" class="minibutton btn-admin "><span><span class="icon"></span>Admin</span></a></li>
        <li>
          <a href="/tmm1/screw-unit/toggle_watch" class="minibutton btn-watch " id="watch_button" style="display:none"><span><span class="icon"></span>Watch</span></a>
          <a href="/tmm1/screw-unit/toggle_watch" btn_class="watch" class="minibutton btn-watch " id="unwatch_button" style="display:none"><span><span class="icon"></span>Unwatch</span></a>
        </li>
        
          <li class="for-notforked" style="display:none"><a href="/tmm1/screw-unit/fork" class="minibutton btn-fork " id="fork_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', 'fc5aca79800178668d7295fd96a979acb3e09bbf'); f.appendChild(s);f.submit();return false;"><span><span class="icon"></span>Fork</span></a></li>
          <li class="for-hasfork" style="display:none"><a href="#" btn_class="fork" class="minibutton btn-fork " id="your_fork_button"><span><span class="icon"></span>Your Fork</span></a></li>
          <li id="pull_request_item" style="display:none"><a href="/tmm1/screw-unit/pull_request/" class="minibutton btn-pull-request "><span><span class="icon"></span>Pull Request</span></a></li>
          <li><a href="#" btn_class="download" class="minibutton btn-download " id="download_button"><span><span class="icon"></span>Download Source</span></a></li>
        
      
      <li class="repostats">
        <ul class="repo-stats">
          <li class="watchers"><a href="/tmm1/screw-unit/watchers" title="Watchers" class="tooltipped downwards">3</a></li>
          <li class="forks"><a href="/tmm1/screw-unit/network" title="Forks" class="tooltipped downwards">11</a></li>
        </ul>
      </li>
    </ul>


        <ul class="tabs">
  <li><a href="http://github.com/tmm1/screw-unit/tree/master" class="selected" highlight="repo_source">Source</a></li>
  <li><a href="http://github.com/tmm1/screw-unit/commits/master" class="false" highlight="repo_commits">Commits</a></li>

  
  <li><a href="/tmm1/screw-unit/network" class="false" highlight="repo_network">Network (11)</a></li>

  

  
    
    <li><a href="/tmm1/screw-unit/issues" class="false" highlight="issues">Issues (0)</a></li>
  

  
    
    <li><a href="/tmm1/screw-unit/downloads" class="false">Downloads (0)</a></li>
  

  
    
    <li><a href="http://wiki.github.com/tmm1/screw-unit/" class="false">Wiki (1)</a></li>
  

  <li><a href="/tmm1/screw-unit/graphs" class="false" highlight="repo_graphs">Graphs</a></li>

  <li class="contextswitch nochoices">
    <span class="toggle leftwards" >
      <em>Branch:</em>
      <code>master</code>
    </span>
  </li>
</ul>

<div class="subnav-bar">
  
  <ul>
    <li>
      <a href="#" class="dropdown">Branches (1)</a>
      <ul>
        
          
            <li><strong>master &#x2713;</strong></li>
            
      </ul>
    </li>
    <li>
      <a href="#" class="dropdown defunct">Tags (0)</a>
      
    </li>
  </ul>
</div>







        
    <div id="repo_details" class="metabox clearfix ">
      <div id="repo_details_loader" class="metabox-loader" style="display:none">Sending Request&hellip;</div>

      
        <a href="#pledgie_box" rel="facebox" title="Brought to you by pledgie.com" class="pledgie pledgie-button for-owner tooltipped" id="activate_pledgie_button" style="display:none"><span>Enable Donations</span></a>
      
      

      <div id="pledgie_box" style="display:none">
        <h2>Pledgie Donations</h2>
        <form action="/tmm1/screw-unit/edit/donate" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="fc5aca79800178668d7295fd96a979acb3e09bbf" /></div>
          <dl class="form miniform">
            <dt><label>Paypal Email</label></dt>
            <dd><input type="text" id="paypal" name="paypal" /></dd>
          </dl>
          <div class="form-actions">
            
            <button type="submit" class="minibutton"><span>Activate Donations</span></button>
          </div>
        </form>
        <div class="rule"></div>
        Once activated, we'll place the following badge in your repository's detail box:
        <div style="text-align:center">
          <img alt="Pledgie_example" src="http://assets2.github.com/images/modules/pagehead/pledgie_example.jpg?1a51c3e040096de7494f18310df24722179d530b" />
        </div>
        This service is courtesy of <a href="http://pledgie.com">Pledgie</a>.
      </div>

      <div id="repository_description" rel="repository_description_edit">
        
          <p>A Javascript BDD Framework with nested describes, a convenient assertion syntax, and an intuitive test browser.
            <span id="read_more" style="display:none">&mdash; <a href="#readme">Read more</a></span>
          </p>
        
      </div>
      <div id="repository_description_edit" style="display:none;" class="inline-edit">
        <form action="/tmm1/screw-unit/edit/update" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="fc5aca79800178668d7295fd96a979acb3e09bbf" /></div>
          <input type="hidden" name="field" value="repository_description">
          <input type="text" class="textfield" name="value" value="A Javascript BDD Framework with nested describes, a convenient assertion syntax, and an intuitive test browser.">
          <div class="form-actions">
            <button class="minibutton"><span>Save</span></button> or <a href="#" class="cancel">cancel</a>
          </div>
        </form>
      </div>

      
        
        <div class="repository-homepage" id="repository_homepage" rel="repository_homepage_edit">
          <p><a href="http://" rel="nofollow"></a></p>
        </div>
        <div id="repository_homepage_edit" style="display:none;" class="inline-edit">
          <form action="/tmm1/screw-unit/edit/update" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="fc5aca79800178668d7295fd96a979acb3e09bbf" /></div>
            <input type="hidden" name="field" value="repository_homepage">
            <input type="text" class="textfield" name="value" value="">
            <div class="form-actions">
              <button class="minibutton"><span>Save</span></button> or <a href="#" class="cancel">cancel</a>
            </div>
          </form>
        </div>
      

      
        <div class="rule "></div>

        <div id="url_box" class="url-box">
          <ul class="clone-urls">
            <li id="private_clone_url" style="display:none"><a href="git@github.com:tmm1/screw-unit.git" data-permissions="Read+Write">Private</a></li>
            
              <li id="public_clone_url"><a href="git://github.com/tmm1/screw-unit.git" data-permissions="Read-Only">Read-Only</a></li>
              <li id="http_clone_url"><a href="http://github.com/tmm1/screw-unit.git" data-permissions="Read-Only">HTTP Read-Only</a></li>
            
          </ul>
          <input type="text" spellcheck="false" id="url_field" class="url-field" />
                <span style="display:none" id="url_box_clippy"></span>
      <span id="clippy_tooltip_url_box_clippy" class="clippy-tooltip tooltipped" title="copy to clipboard">
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="14"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="/flash/clippy.swf?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=url_box_clippy&amp;copied=&amp;copyto=">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="/flash/clippy.swf?v5"
             width="14"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=url_box_clippy&amp;copied=&amp;copyto="
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      </span>

          <p id="url_description">This URL has <strong>Read+Write</strong> access</p>
        </div>
      
    </div>


      </div><!-- /.pagehead -->

      









<script type="text/javascript">
  GitHub.currentCommitRef = "master"
  GitHub.currentRepoOwner = "tmm1"
  GitHub.currentRepo = "screw-unit"
  GitHub.downloadRepo = '/tmm1/screw-unit/archives/master'
  
</script>










  <div id="commit">
    <div class="group">
        
  <div class="envelope commit">
    <div class="human">
      
        <div class="message"><pre><a href="/tmm1/screw-unit/commit/b11bb15921302536956fc0a0d7e4364a47cffbbd">jQuery.print: add support for arguments and nodelists</a> </pre></div>
      

      <div class="actor">
        <div class="gravatar">
          
          <img alt="" height="30" src="http://www.gravatar.com/avatar/d47656e20ff5e42f125fc5ea0fd636c6?s=30&amp;d=http%3A%2F%2Fgithub.com%2Fimages%2Fgravatars%2Fgravatar-30.png" width="30" />
        </div>
        <div class="name">Aman Gupta <span>(author)</span></div>
        <div class="date">
          <abbr class="relatize" title="2008-05-20 15:20:24">Tue May 20 15:20:24 -0700 2008</abbr>
        </div>
      </div>

      

    </div>
    <div class="machine">
      <span>c</span>ommit&nbsp;&nbsp;<a href="/tmm1/screw-unit/commit/b11bb15921302536956fc0a0d7e4364a47cffbbd" hotkey="c">b11bb15921302536956fc0a0d7e4364a47cffbbd</a><br />
      <span>t</span>ree&nbsp;&nbsp;&nbsp;&nbsp;<a href="/tmm1/screw-unit/tree/b11bb15921302536956fc0a0d7e4364a47cffbbd" hotkey="t">a21ec39e0e38e3601e5cdc614bff7006388c2664</a><br />

      
        <span>p</span>arent&nbsp;
        
        <a href="/tmm1/screw-unit/tree/45df483540c2b4bb347399d1956a0fc6129eda3b" hotkey="p">45df483540c2b4bb347399d1956a0fc6129eda3b</a>
      

    </div>
  </div>

    </div>
  </div>



  
    <div id="path">
      <b><a href="/tmm1/screw-unit/tree/master">screw-unit</a></b> / <a href="/tmm1/screw-unit/tree/master/lib">lib</a> / jquery.print.js       <span style="display:none" id="clippy_4283">lib/jquery.print.js</span>
      
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="110"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="/flash/clippy.swf?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=clippy_4283&amp;copied=copied!&amp;copyto=copy to clipboard">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="/flash/clippy.swf?v5"
             width="110"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=clippy_4283&amp;copied=copied!&amp;copyto=copy to clipboard"
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      

    </div>

    <div id="files">
      <div class="file">
        <div class="meta">
          <div class="info">
            <span>100644</span>
            <span>109 lines (98 sloc)</span>
            <span>3.366 kb</span>
          </div>
          <div class="actions">
            
              <a style="display:none;" id="file-edit-link" href="#" rel="/tmm1/screw-unit/file-edit/__ref__/lib/jquery.print.js">edit</a>
            
            <a href="/tmm1/screw-unit/raw/master/lib/jquery.print.js" id="raw-url">raw</a>
            
              <a href="/tmm1/screw-unit/blame/master/lib/jquery.print.js">blame</a>
            
            <a href="/tmm1/screw-unit/commits/master/lib/jquery.print.js">history</a>
          </div>
        </div>
        
  <div class="data syntax type-js">
    
      <table cellpadding="0" cellspacing="0">
        <tr>
          <td>
            
            <pre class="line_numbers">
<span id="LID1" rel="#L1">1</span>
<span id="LID2" rel="#L2">2</span>
<span id="LID3" rel="#L3">3</span>
<span id="LID4" rel="#L4">4</span>
<span id="LID5" rel="#L5">5</span>
<span id="LID6" rel="#L6">6</span>
<span id="LID7" rel="#L7">7</span>
<span id="LID8" rel="#L8">8</span>
<span id="LID9" rel="#L9">9</span>
<span id="LID10" rel="#L10">10</span>
<span id="LID11" rel="#L11">11</span>
<span id="LID12" rel="#L12">12</span>
<span id="LID13" rel="#L13">13</span>
<span id="LID14" rel="#L14">14</span>
<span id="LID15" rel="#L15">15</span>
<span id="LID16" rel="#L16">16</span>
<span id="LID17" rel="#L17">17</span>
<span id="LID18" rel="#L18">18</span>
<span id="LID19" rel="#L19">19</span>
<span id="LID20" rel="#L20">20</span>
<span id="LID21" rel="#L21">21</span>
<span id="LID22" rel="#L22">22</span>
<span id="LID23" rel="#L23">23</span>
<span id="LID24" rel="#L24">24</span>
<span id="LID25" rel="#L25">25</span>
<span id="LID26" rel="#L26">26</span>
<span id="LID27" rel="#L27">27</span>
<span id="LID28" rel="#L28">28</span>
<span id="LID29" rel="#L29">29</span>
<span id="LID30" rel="#L30">30</span>
<span id="LID31" rel="#L31">31</span>
<span id="LID32" rel="#L32">32</span>
<span id="LID33" rel="#L33">33</span>
<span id="LID34" rel="#L34">34</span>
<span id="LID35" rel="#L35">35</span>
<span id="LID36" rel="#L36">36</span>
<span id="LID37" rel="#L37">37</span>
<span id="LID38" rel="#L38">38</span>
<span id="LID39" rel="#L39">39</span>
<span id="LID40" rel="#L40">40</span>
<span id="LID41" rel="#L41">41</span>
<span id="LID42" rel="#L42">42</span>
<span id="LID43" rel="#L43">43</span>
<span id="LID44" rel="#L44">44</span>
<span id="LID45" rel="#L45">45</span>
<span id="LID46" rel="#L46">46</span>
<span id="LID47" rel="#L47">47</span>
<span id="LID48" rel="#L48">48</span>
<span id="LID49" rel="#L49">49</span>
<span id="LID50" rel="#L50">50</span>
<span id="LID51" rel="#L51">51</span>
<span id="LID52" rel="#L52">52</span>
<span id="LID53" rel="#L53">53</span>
<span id="LID54" rel="#L54">54</span>
<span id="LID55" rel="#L55">55</span>
<span id="LID56" rel="#L56">56</span>
<span id="LID57" rel="#L57">57</span>
<span id="LID58" rel="#L58">58</span>
<span id="LID59" rel="#L59">59</span>
<span id="LID60" rel="#L60">60</span>
<span id="LID61" rel="#L61">61</span>
<span id="LID62" rel="#L62">62</span>
<span id="LID63" rel="#L63">63</span>
<span id="LID64" rel="#L64">64</span>
<span id="LID65" rel="#L65">65</span>
<span id="LID66" rel="#L66">66</span>
<span id="LID67" rel="#L67">67</span>
<span id="LID68" rel="#L68">68</span>
<span id="LID69" rel="#L69">69</span>
<span id="LID70" rel="#L70">70</span>
<span id="LID71" rel="#L71">71</span>
<span id="LID72" rel="#L72">72</span>
<span id="LID73" rel="#L73">73</span>
<span id="LID74" rel="#L74">74</span>
<span id="LID75" rel="#L75">75</span>
<span id="LID76" rel="#L76">76</span>
<span id="LID77" rel="#L77">77</span>
<span id="LID78" rel="#L78">78</span>
<span id="LID79" rel="#L79">79</span>
<span id="LID80" rel="#L80">80</span>
<span id="LID81" rel="#L81">81</span>
<span id="LID82" rel="#L82">82</span>
<span id="LID83" rel="#L83">83</span>
<span id="LID84" rel="#L84">84</span>
<span id="LID85" rel="#L85">85</span>
<span id="LID86" rel="#L86">86</span>
<span id="LID87" rel="#L87">87</span>
<span id="LID88" rel="#L88">88</span>
<span id="LID89" rel="#L89">89</span>
<span id="LID90" rel="#L90">90</span>
<span id="LID91" rel="#L91">91</span>
<span id="LID92" rel="#L92">92</span>
<span id="LID93" rel="#L93">93</span>
<span id="LID94" rel="#L94">94</span>
<span id="LID95" rel="#L95">95</span>
<span id="LID96" rel="#L96">96</span>
<span id="LID97" rel="#L97">97</span>
<span id="LID98" rel="#L98">98</span>
<span id="LID99" rel="#L99">99</span>
<span id="LID100" rel="#L100">100</span>
<span id="LID101" rel="#L101">101</span>
<span id="LID102" rel="#L102">102</span>
<span id="LID103" rel="#L103">103</span>
<span id="LID104" rel="#L104">104</span>
<span id="LID105" rel="#L105">105</span>
<span id="LID106" rel="#L106">106</span>
<span id="LID107" rel="#L107">107</span>
<span id="LID108" rel="#L108">108</span>
<span id="LID109" rel="#L109">109</span>
</pre>
          </td>
          <td width="100%">
            
              <div class="highlight"><pre><div class="line" id="LC1"><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC2">&nbsp;</div><div class="line" id="LC3">&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">print_array</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">opts</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC4">&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">[];</span></div><div class="line" id="LC5">&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="nx">opts</span><span class="p">.</span><span class="nx">max_array</span><span class="p">,</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span></div><div class="line" id="LC6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">print</span><span class="p">(</span><span class="nx">obj</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">opts</span><span class="p">,</span> <span class="p">{</span> <span class="nx">max_array</span><span class="o">:</span> <span class="mi">3</span><span class="p">,</span> <span class="nx">max_string</span><span class="o">:</span> <span class="mi">40</span> <span class="p">})));</span></div><div class="line" id="LC7">&nbsp;</div><div class="line" id="LC8">&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">max_array</span><span class="p">)</span></div><div class="line" id="LC9">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span><span class="p">.</span><span class="nx">push</span><span class="p">((</span><span class="nx">obj</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">max_array</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39; more...&#39;</span><span class="p">);</span></div><div class="line" id="LC10">&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">result</span><span class="p">.</span><span class="nx">length</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span> <span class="k">return</span> <span class="s2">&quot;[]&quot;</span></div><div class="line" id="LC11">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s2">&quot;[ &quot;</span> <span class="o">+</span> <span class="nx">result</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;, &quot;</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot; ]&quot;</span><span class="p">;</span></div><div class="line" id="LC12">&nbsp;&nbsp;<span class="p">}</span></div><div class="line" id="LC13">&nbsp;</div><div class="line" id="LC14">&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">print_element</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC15">&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">==</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC16">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">[];</span></div><div class="line" id="LC17">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">properties</span> <span class="o">=</span> <span class="p">[</span> <span class="s1">&#39;className&#39;</span><span class="p">,</span> <span class="s1">&#39;id&#39;</span> <span class="p">];</span></div><div class="line" id="LC18">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">extra</span> <span class="o">=</span> <span class="p">{</span></div><div class="line" id="LC19">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;input&#39;</span><span class="o">:</span> <span class="p">[</span><span class="s1">&#39;type&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="p">],</span></div><div class="line" id="LC20">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;a&#39;</span><span class="o">:</span> <span class="p">[</span><span class="s1">&#39;href&#39;</span><span class="p">,</span> <span class="s1">&#39;target&#39;</span><span class="p">],</span></div><div class="line" id="LC21">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;form&#39;</span><span class="o">:</span> <span class="p">[</span><span class="s1">&#39;method&#39;</span><span class="p">,</span> <span class="s1">&#39;action&#39;</span><span class="p">],</span></div><div class="line" id="LC22">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;script&#39;</span><span class="o">:</span> <span class="p">[</span><span class="s1">&#39;src&#39;</span><span class="p">],</span></div><div class="line" id="LC23">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;link&#39;</span><span class="o">:</span> <span class="p">[</span><span class="s1">&#39;href&#39;</span><span class="p">],</span></div><div class="line" id="LC24">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;img&#39;</span><span class="o">:</span> <span class="p">[</span><span class="s1">&#39;src&#39;</span><span class="p">]</span></div><div class="line" id="LC25">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class="line" id="LC26">&nbsp;</div><div class="line" id="LC27">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">properties</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="nx">extra</span><span class="p">[</span><span class="nx">obj</span><span class="p">.</span><span class="nx">tagName</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()]</span> <span class="o">||</span> <span class="p">[]),</span> <span class="kd">function</span><span class="p">(){</span></div><div class="line" id="LC28">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span><span class="p">[</span><span class="k">this</span><span class="p">])</span></div><div class="line" id="LC29">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="s1">&#39; &#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="s1">&#39;className&#39;</span><span class="p">,</span> <span class="s1">&#39;class&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;=&quot;</span> <span class="o">+</span> <span class="nx">$</span><span class="p">.</span><span class="nx">print</span><span class="p">(</span><span class="nx">obj</span><span class="p">[</span><span class="k">this</span><span class="p">]))</span></div><div class="line" id="LC30">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class="line" id="LC31">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s2">&quot;&lt;&quot;</span> <span class="o">+</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">tagName</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span></div><div class="line" id="LC32">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="nx">result</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;&gt;&quot;</span><span class="p">;</span></div><div class="line" id="LC33">&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class="line" id="LC34">&nbsp;&nbsp;<span class="p">}</span></div><div class="line" id="LC35">&nbsp;</div><div class="line" id="LC36">&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">print_object</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">opts</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC37">&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">seen</span> <span class="o">=</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">seen</span> <span class="o">||</span> <span class="p">[</span> <span class="nx">obj</span> <span class="p">];</span></div><div class="line" id="LC38">&nbsp;</div><div class="line" id="LC39">&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">;</span></div><div class="line" id="LC40">&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">k</span> <span class="k">in</span> <span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC41">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">k</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">$</span><span class="p">.</span><span class="nx">inArray</span><span class="p">(</span><span class="nx">obj</span><span class="p">[</span><span class="nx">k</span><span class="p">],</span> <span class="nx">seen</span><span class="p">)</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC42">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">seen</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">obj</span><span class="p">[</span><span class="nx">k</span><span class="p">]);</span></div><div class="line" id="LC43">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">print</span><span class="p">(</span><span class="nx">obj</span><span class="p">[</span><span class="nx">k</span><span class="p">],</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">opts</span><span class="p">,</span> <span class="p">{</span> <span class="nx">max_array</span><span class="o">:</span> <span class="mi">6</span><span class="p">,</span> <span class="nx">max_string</span><span class="o">:</span> <span class="mi">40</span><span class="p">,</span> <span class="nx">seen</span><span class="o">:</span> <span class="nx">seen</span> <span class="p">}));</span></div><div class="line" id="LC44">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span></div><div class="line" id="LC45">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="s2">&quot;...&quot;</span><span class="p">;</span></div><div class="line" id="LC46">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">k</span> <span class="o">+</span> <span class="s2">&quot;: &quot;</span> <span class="o">+</span> <span class="nx">value</span><span class="p">);</span></div><div class="line" id="LC47">&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class="line" id="LC48">&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">result</span><span class="p">.</span><span class="nx">length</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span> <span class="k">return</span> <span class="s2">&quot;{}&quot;</span><span class="p">;</span></div><div class="line" id="LC49">&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s2">&quot;{ &quot;</span> <span class="o">+</span> <span class="nx">result</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;, &quot;</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot; }&quot;</span><span class="p">;</span></div><div class="line" id="LC50">&nbsp;&nbsp;<span class="p">}</span></div><div class="line" id="LC51">&nbsp;</div><div class="line" id="LC52">&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">print_string</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">opts</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC53">&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">character_substitutions</span> <span class="o">=</span> <span class="p">{</span></div><div class="line" id="LC54">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;\b&#39;</span><span class="o">:</span> <span class="s1">&#39;\\b&#39;</span><span class="p">,</span></div><div class="line" id="LC55">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;\t&#39;</span><span class="o">:</span> <span class="s1">&#39;\\t&#39;</span><span class="p">,</span></div><div class="line" id="LC56">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;\n&#39;</span><span class="o">:</span> <span class="s1">&#39;\\n&#39;</span><span class="p">,</span></div><div class="line" id="LC57">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;\f&#39;</span><span class="o">:</span> <span class="s1">&#39;\\f&#39;</span><span class="p">,</span></div><div class="line" id="LC58">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;\r&#39;</span><span class="o">:</span> <span class="s1">&#39;\\r&#39;</span><span class="p">,</span></div><div class="line" id="LC59">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;&quot;&#39;</span> <span class="o">:</span> <span class="s1">&#39;\\&quot;&#39;</span><span class="p">,</span></div><div class="line" id="LC60">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;\\&#39;</span><span class="o">:</span> <span class="s1">&#39;\\\\&#39;</span></div><div class="line" id="LC61">&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class="line" id="LC62">&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">r</span> <span class="o">=</span> <span class="sr">/[&quot;\\\x00-\x1f\x7f-\x9f]/g</span><span class="p">;</span></div><div class="line" id="LC63">&nbsp;&nbsp;&nbsp;&nbsp;</div><div class="line" id="LC64">&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">str</span> <span class="o">=</span> <span class="nx">r</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span></div><div class="line" id="LC65">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">?</span> <span class="s1">&#39;&quot;&#39;</span> <span class="o">+</span> <span class="nx">value</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">r</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">a</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC66">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">c</span> <span class="o">=</span> <span class="nx">character_substitutions</span><span class="p">[</span><span class="nx">a</span><span class="p">];</span></div><div class="line" id="LC67">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">c</span><span class="p">)</span> <span class="k">return</span> <span class="nx">c</span><span class="p">;</span></div><div class="line" id="LC68">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">c</span> <span class="o">=</span> <span class="nx">a</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">();</span></div><div class="line" id="LC69">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;\\u00&#39;</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">c</span> <span class="o">/</span> <span class="mi">16</span><span class="p">).</span><span class="nx">toString</span><span class="p">(</span><span class="mi">16</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="nx">c</span> <span class="o">%</span> <span class="mi">16</span><span class="p">).</span><span class="nx">toString</span><span class="p">(</span><span class="mi">16</span><span class="p">);</span></div><div class="line" id="LC70">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span></div><div class="line" id="LC71">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">:</span> <span class="s1">&#39;&quot;&#39;</span> <span class="o">+</span> <span class="nx">value</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span><span class="p">;</span></div><div class="line" id="LC72">&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">str</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">max_string</span><span class="p">)</span></div><div class="line" id="LC73">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">str</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">max_string</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;...&quot;&#39;</span><span class="p">;</span></div><div class="line" id="LC74">&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span></div><div class="line" id="LC75">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">str</span><span class="p">;</span></div><div class="line" id="LC76">&nbsp;&nbsp;<span class="p">}</span></div><div class="line" id="LC77">&nbsp;</div><div class="line" id="LC78">&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">print</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC79">&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">opts</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="p">{</span> <span class="nx">max_array</span><span class="o">:</span> <span class="mi">10</span><span class="p">,</span> <span class="nx">max_string</span><span class="o">:</span> <span class="mi">100</span> <span class="p">},</span> <span class="nx">options</span><span class="p">);</span></div><div class="line" id="LC80">&nbsp;</div><div class="line" id="LC81">&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">obj</span> <span class="o">==</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span></div><div class="line" id="LC82">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s2">&quot;undefined&quot;</span><span class="p">;</span></div><div class="line" id="LC83">&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">obj</span> <span class="o">==</span> <span class="s1">&#39;boolean&#39;</span><span class="p">)</span></div><div class="line" id="LC84">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">toString</span><span class="p">();</span></div><div class="line" id="LC85">&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">obj</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">obj</span> <span class="o">==</span> <span class="s1">&#39;number&#39;</span><span class="p">)</span></div><div class="line" id="LC86">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;NaN&#39;</span><span class="p">;</span></div><div class="line" id="LC87">&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">obj</span><span class="p">)</span></div><div class="line" id="LC88">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s2">&quot;null&quot;</span><span class="p">;</span></div><div class="line" id="LC89">&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">obj</span> <span class="o">==</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span></div><div class="line" id="LC90">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">print_string</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">opts</span><span class="p">);</span></div><div class="line" id="LC91">&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="k">instanceof</span> <span class="nb">RegExp</span><span class="p">)</span></div><div class="line" id="LC92">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">toString</span><span class="p">();</span></div><div class="line" id="LC93">&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="k">instanceof</span> <span class="nb">Array</span> <span class="o">||</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">callee</span> <span class="o">||</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">item</span><span class="p">)</span></div><div class="line" id="LC94">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">print_array</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">opts</span><span class="p">);</span></div><div class="line" id="LC95">&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">obj</span> <span class="o">==</span> <span class="s1">&#39;function&#39;</span> <span class="o">||</span> <span class="nx">obj</span> <span class="k">instanceof</span> <span class="nb">Function</span><span class="p">)</span></div><div class="line" id="LC96">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">toString</span><span class="p">().</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^([^)]*\))/</span><span class="p">)[</span><span class="mi">1</span><span class="p">];</span></div><div class="line" id="LC97">&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">nodeType</span><span class="p">)</span></div><div class="line" id="LC98">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">print_element</span><span class="p">(</span><span class="nx">obj</span><span class="p">);</span></div><div class="line" id="LC99">&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="k">instanceof</span> <span class="nx">jQuery</span><span class="p">)</span></div><div class="line" id="LC100">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s2">&quot;$(&quot;</span> <span class="o">+</span> <span class="nx">$</span><span class="p">.</span><span class="nx">print</span><span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">get</span><span class="p">())</span> <span class="o">+</span> <span class="s2">&quot;)&quot;</span><span class="p">;</span></div><div class="line" id="LC101">&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="k">instanceof</span> <span class="nb">Error</span><span class="p">)</span></div><div class="line" id="LC102">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">print_object</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">options</span><span class="p">,</span> <span class="p">{</span> <span class="nx">max_string</span><span class="o">:</span> <span class="mi">200</span> <span class="p">}));</span></div><div class="line" id="LC103">&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="k">instanceof</span> <span class="nb">Object</span><span class="p">)</span></div><div class="line" id="LC104">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">print_object</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">opts</span><span class="p">);</span></div><div class="line" id="LC105">&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span></div><div class="line" id="LC106">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">toString</span><span class="p">().</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n\s*/g</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class="line" id="LC107">&nbsp;&nbsp;<span class="p">}</span></div><div class="line" id="LC108">&nbsp;</div><div class="line" id="LC109"><span class="p">})(</span><span class="nx">jQuery</span><span class="p">);</span></div></pre></div>
            
          </td>
        </tr>
      </table>
    
  </div>


      </div>
    </div>

  


    </div>
  
      

      <div class="push"></div>
    </div>

    <div id="footer">
      <div class="site">
        <div class="info">
          <div class="links">
            <a href="http://github.com/blog"><b>Blog</b></a> |
            <a href="http://support.github.com/">Support</a> |
            <a href="http://github.com/training">Training</a> |
            <a href="http://github.com/contact">Contact</a> |
            <a href="http://develop.github.com">API</a> |
            <a href="http://twitter.com/github">Status</a> |
            <a href="http://twitter.com/github">Twitter</a> |
            <a href="http://help.github.com">Help</a> |
            <a href="http://github.com/security">Security</a>
          </div>
          <div class="company">
            &copy;
            2010
            <span id="_rrt" title="0.27401s from fe2.rs.github.com">GitHub</span> Inc.
            All rights reserved.
           | <a href="/site/terms">Terms of Service</a> | <a href="/site/privacy">Privacy Policy</a>
          </div>
        </div>
        <div class="sponsor">
          <div>
            Powered by the <a href="http://www.rackspace.com ">Dedicated
            Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
            Computing</a> of Rackspace Hosting<span>&reg;</span>
          </div>
          <a href="http://www.rackspace.com">
            <img alt="Dedicated Server" src="http://assets1.github.com/images/modules/footer/rackspace_logo.png?1a51c3e040096de7494f18310df24722179d530b" />
          </a>
        </div>
      </div>
    </div>

    <script>window._auth_token = "fc5aca79800178668d7295fd96a979acb3e09bbf"</script>
    
    
  </body>
</html>

