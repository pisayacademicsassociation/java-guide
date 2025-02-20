import{e}from"./app.8e2ec6d6.js";const t={},n=e(`<h1 id="java-guide-notation" tabindex="-1"><a class="header-anchor" href="#java-guide-notation" aria-hidden="true">#</a> Java Guide notation</h1><p>Throughout this guide, you will find certain notations in certain parts of code, explanations, etc. To help you understand the content within the guide, we will be going over some standard notations used in this guide. Do note that this isn&#39;t official Java syntax, and trying to use this as syntax will give you an error.</p><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2><p>The notation <code>&lt;Class&gt;</code> means an instance of the <code>Class</code> class. For example, a snippet like <code>&lt;Class&gt;.main()</code> refers to the instance method <code>main()</code> of the <code>Class</code> class, while a snippet like <code>Class.main()</code> refers to the static method <code>main()</code> of the <code>Class</code> class.</p><p>Additionally, the <code>#</code> symbol can refer to an instance field of the class. From our example above, <code>Class#main</code> also refers to the <strong>instance</strong> method <code>main()</code>, and not the <strong>static</strong> method <code>main()</code>.</p><p>We can extend this notation further, such as using method signatures. For example, imagine a class <code>Overload</code> with two instance methods: <code>myMethod(int number)</code> and <code>myMethod(String text)</code>. When we want to refer to <code>myMethod(String text)</code>, we can write the notation as such: <code>Overload#myMethod(String)</code> or <code>&lt;Overload&gt;.myMethod(String)</code>. When writing method signatures, only the type is written, and the variable is excluded.</p><p>For a quick recap, refer to the examples below.</p><ul><li><code>&lt;Class&gt;.main()</code> and <code>Class#main()</code> refers to the <strong>instance</strong> method <code>main()</code> of the <code>Class</code> class.</li><li><code>Class.main()</code> refers to the <strong>static</strong> method <code>main()</code> of the <code>Class</code> class.</li><li><code>&lt;Class&gt;.property</code> and <code>Class#property</code> refers to the <strong>instance</strong> field <code>property</code> of the <code>Class</code> class.</li><li><code>Class.property</code> refers to the <strong>static</strong> field property of the <code>Class</code> class.</li><li><code>&lt;Class&gt;.main(String, int)</code> and <code>Class#main(String, int)</code> refers to the <strong>instance</strong> method <code>main()</code> of the <code>Class</code> class with the arguments being <code>(String, int)</code>.</li><li><code>Class.main(String, int)</code> refers to the <strong>static</strong> method <code>main()</code> of the <code>Class</code> class with the arguments being <code>(String, int)</code>.</li></ul><h3 id="section-declared-code" tabindex="-1"><a class="header-anchor" href="#section-declared-code" aria-hidden="true">#</a> Section-declared code</h3><p>It is important to note that this notation will only refer to methods or fields that are not explicitly declared in that section. Take a look at the snippet below as an example.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Scanner</span> input <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;What is your name: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> name <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Here, <code>input.nextLine()</code> refers to the method <code>input.nextLine()</code> as declared in the snippet, and not the static method <code>nextLine()</code> of the class <code>input</code>.</p><p>What about <code>input.next()</code>? Would that refer to the static method <code>next()</code> of the class <code>input</code>? The answer is no, since <code>input</code> is already &quot;declared&quot; as an instance of <code>Scanner</code> in the code snippet above.</p><p>What if there&#39;s a static class called <code>input</code> and we want to refer to the static method <code>next()</code> of that class instead, when we have this code snippet here? For special cases like these, the guide will add the <code>(E)</code> modifier to the end of the snippet. For example, <code>input.next() (E)</code> would refer to the static method <code>next()</code> of the class <code>input</code> instead, considering the snippet above. Another method is to use the full package name, let&#39;s say <code>input</code> is part of the <code>com.tests</code> package, then <code>com.tests.input.next()</code> would also refer to the static method <code>input.next()</code>. Don&#39;t worry though, as there&#39;s barely any instances of this happening.</p>`,14);function a(s,o){return n}t.render=a;export{t as default};
