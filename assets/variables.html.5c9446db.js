import{e as a}from"./app.8e2ec6d6.js";const e={},n=a(`<h1 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h1><h2 id="what-are-variables-anyway" tabindex="-1"><a class="header-anchor" href="#what-are-variables-anyway" aria-hidden="true">#</a> What are variables, anyway?</h2><p>Variables are parts of a program that can store and represent data.</p><p>These are usually used as</p><ul><li>instance variables - variables tied to a class instance;</li><li>local variables - variables declared in a method;</li><li>arguments - variables passed to a method;</li><li>return values - variables returned by a method.</li></ul><p>For Java, each variable must have a type and unique name that identifies said variable.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">69</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="variable-naming-conventions" tabindex="-1"><a class="header-anchor" href="#variable-naming-conventions" aria-hidden="true">#</a> Variable naming conventions</h2><p>Just like any other programming language, you can&#39;t use reserved keywords like <code>if</code> and <code>else</code> as variable names, and standard variable naming rules also apply:</p><ul><li>The valid characters to name a variable with are letters, digits, dollar signs and underscore characters, however</li><li>You <strong>cannot</strong> have a number as the first character in your variable.</li></ul><p>There are also the standard variable naming conventions:</p><ul><li>For naming variables, you don&#39;t use the &quot;$&quot; symbol.</li><li>For naming variables, properties and methods, <code>camelCase</code> is used, while classes use <code>PascalCase</code>, however.</li><li>Constant values are named in <code>UPPER_SNAKE_CASE</code>.</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Do note that <strong>conventions</strong> are different from <strong>rules</strong>! Breaking the variable naming rules will lead to an error, but breaking the variable naming conventions won&#39;t!</p></div><p>If you want to declare a variable as a constant variable, use the <code>final</code> keyword before the type declaration, like so:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">69</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,15);function s(r,i){return n}e.render=s;export{e as default};
