import{r as a,o as t,c as o,a as n,b as l,F as i,d as s}from"./app.bb4ae638.js";var c="/java-guide/assets/input_1.d35f5f88.png",u="/java-guide/assets/message_dialogs.22a51ef5.png";const p={},d=n("h1",{id:"dialogs-and-messages",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#dialogs-and-messages","aria-hidden":"true"},"#"),s(" Dialogs and Messages")],-1),r=n("p",null,"There may be some instances where you wanted to show a quick message to the user, but it's too hard to be implemented into the GUI directly, or to be created in an entirely new JFrame. Luckily, there is a solution: the Dialog Box.",-1),m=n("p",null,[s("A dialog box can be used to easily display messages, output, or even take input! To use dialog boxes, you need the "),n("code",null,"JOptionPane"),s(" class from the "),n("code",null,"javax.swing"),s(" package.")],-1),g=n("h2",{id:"taking-input-using-a-dialog-box",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#taking-input-using-a-dialog-box","aria-hidden":"true"},"#"),s(" Taking input using a dialog box")],-1),h=n("p",null,[s("To take user input using a dialog box, you can use the "),n("code",null,"JOptionPane.showInputDialog()"),s(" method.")],-1),k=n("div",{class:"language-java ext-java line-numbers-mode"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token class-name"},"String"),s(),n("span",{class:"token class-name"},"JOptionPane"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"showInputDialog"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Object"),s(" message"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br")])],-1),_=n("p",null,[s("Using this method shows an input dialog with "),n("code",null,"message"),s(" as the message.")],-1),b=n("img",{src:c},null,-1),y=n("p",null,[s("Additionally, you can center the input dialog relative to a component by providing a "),n("code",null,"parentComponent"),s(".")],-1),O=n("div",{class:"language-java ext-java line-numbers-mode"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token class-name"},"String"),s(),n("span",{class:"token class-name"},"JOptionPane"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"showInputDialog"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Component"),s(" parentComponent"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Object"),s(" message"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br")])],-1),v=n("p",null,[s("Using this method would center the created input dialog on the "),n("code",null,"parentComponent"),s(".")],-1),w=n("p",null,"Do you wanna add a title? Well, you can!",-1),f=n("div",{class:"language-java ext-java line-numbers-mode"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token class-name"},"String"),s(),n("span",{class:"token function"},"showInputDialog"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Component"),s(" parentComponent"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Object"),s(" message"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"String"),s(" title"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" messageType"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br")])],-1),P=n("p",null,[s("This overloaded method shows a input dialog box from the user parented to "),n("code",null,"parentComponent"),s(" with the dialog having the title "),n("code",null,"title"),s(" and message type "),n("code",null,"messageType"),s(".")],-1),E=n("ul",null,[n("li",null,[n("strong",null,"Parameters:"),n("ul",null,[n("li",null,[n("strong",null,"parentComponent"),s(" the parent "),n("code",null,"Component"),s(" for the dialog")]),n("li",null,[n("strong",null,"message"),s(" the "),n("code",null,"Object"),s(" to display")]),n("li",null,[n("strong",null,"title"),s(" the "),n("code",null,"String"),s(" to display in the dialog title bar")]),n("li",null,[n("strong",null,"messageType"),s(" the type of message that is to be displayed: "),n("code",null,"JOptionPane.ERROR_MESSAGE"),s(", "),n("code",null,"JOptionPane.INFORMATION_MESSAGE"),s(", "),n("code",null,"JOptionPane.WARNING_MESSAGE"),s(", "),n("code",null,"JOptionPane.QUESTION_MESSAGE"),s(", or "),n("code",null,"JOptionPane.PLAIN_MESSAGE"),s(".")])])])],-1),S=n("p",null,"While this dialog box is still on the screen, the user cannot interact with the application.",-1),j=n("p",null,[n("strong",null,"Example:")],-1),T=n("div",{class:"language-java ext-java line-numbers-mode"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token class-name"},"String"),s(" input "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"JOptionPane"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"showInputDialog"),n("span",{class:"token punctuation"},"("),s("myJButton"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Please input a number."'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Number input"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"JOptionPane"),n("span",{class:"token punctuation"},"."),s("QUESTION_MESSAGE"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br")])],-1),C=n("h2",{id:"displaying-messages-using-a-dialog-box",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#displaying-messages-using-a-dialog-box","aria-hidden":"true"},"#"),s(" Displaying messages using a dialog box")],-1),J=n("p",null,[s("To take user input using a dialog box, you can use the "),n("code",null,"JOptionPane.showMessageDialog()"),s(" method.")],-1),N=n("div",{class:"language-java ext-java line-numbers-mode"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"showMessageDialog"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Component"),s(" parentComponent"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Object"),s(" message"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br")])],-1),x=n("p",null,[s("Just like "),n("code",null,"showInputDialog()"),s(", you can center the message dialog relative to a component by providing a "),n("code",null,"parentComponent"),s(".")],-1),I=n("div",{class:"language-java ext-java line-numbers-mode"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"showMessageDialog"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Component"),s(" parentComponent"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Object"),s(" message"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"String"),s(" title"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" messageType"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br")])],-1),A=n("p",null,[s("This overloaded method brings up a dialog that displays a message using a default icon determined by the "),n("code",null,"messageType"),s(" parameter.")],-1),M=n("ul",null,[n("li",null,[s("Parameters: "),n("ul",null,[n("li",null,[n("strong",null,"parentComponent"),s(" determines the "),n("code",null,"Frame"),s(" in which the dialog is displayed; if "),n("code",null,"null"),s(", or if the "),n("code",null,"parentComponent"),s(" has no "),n("code",null,"Frame"),s(", a default "),n("code",null,"Frame"),s(" is used.")]),n("li",null,[n("strong",null,"message"),s(" the "),n("code",null,"Object"),s(" to display.")]),n("li",null,[n("strong",null,"title"),s(" the title string for the dialog.")]),n("li",null,[n("strong",null,"messageType"),s(" the type of message that is to be displayed: "),n("code",null,"JOptionPane.ERROR_MESSAGE"),s(", "),n("code",null,"JOptionPane.INFORMATION_MESSAGE"),s(", "),n("code",null,"JOptionPane.WARNING_MESSAGE"),s(", "),n("code",null,"JOptionPane.QUESTION_MESSAGE"),s(", or "),n("code",null,"JOptionPane.PLAIN_MESSAGE"),s(".")])])])],-1),D=n("p",null,[n("strong",null,"Example:")],-1),G=n("div",{class:"language-java ext-java line-numbers-mode"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token class-name"},"String"),s(" input "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"JOptionPane"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"showMessageDialog"),n("span",{class:"token punctuation"},"("),s("myJButton"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Please input a proper number!"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Wrong input!"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"JOptionPane"),n("span",{class:"token punctuation"},"."),s("ERROR_MESSAGE"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br")])],-1),R=n("h2",{id:"confirmations-using-a-dialog-box",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#confirmations-using-a-dialog-box","aria-hidden":"true"},"#"),s(" Confirmations using a dialog box")],-1),F=n("p",null,[s("To ask a user for confirmation using a dialog box, you can use the "),n("code",null,"JOptionPane.showConfirmDialog()"),s(" method.")],-1),L=n("div",{class:"language-java ext-java line-numbers-mode"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"showConfirmDialog"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Component"),s(" parentComponent"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Object"),s(" message"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br")])],-1),B=n("p",null,[s("Just like "),n("code",null,"showInputDialog()"),s(", you can center the confirm dialog relative to a component by providing a "),n("code",null,"parentComponent"),s(".")],-1),Y=n("div",{class:"language-java ext-java line-numbers-mode"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"showConfirmDialog"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Component"),s(" parentComponent"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Object"),s(" message"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"String"),s(" title"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" optionType"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br")])],-1),U=n("p",null,[s("This overloaded method brings up a dialog where the number of choices is determined by the "),n("code",null,"optionType"),s(" parameter.")],-1),W=n("ul",null,[n("li",null,[s("Parameters: "),n("ul",null,[n("li",null,[n("strong",null,"parentComponent"),s(" determines the "),n("code",null,"Frame"),s(" in which the dialog is displayed; if "),n("code",null,"null"),s(", or if the "),n("code",null,"parentComponent"),s(" has no "),n("code",null,"Frame"),s(", a default "),n("code",null,"Frame"),s(" is used.")]),n("li",null,[n("strong",null,"message"),s(" the "),n("code",null,"Object"),s(" to display.")]),n("li",null,[n("strong",null,"title"),s(" the title string for the dialog.")]),n("li",null,[n("strong",null,"optionType"),s(" the type of options available on the dialog: "),n("code",null,"JOptionPane.YES_NO_OPTION"),s(", "),n("code",null,"JOptionPane.YES_NO_CANCEL_OPTION"),s(", or "),n("code",null,"JOptionPane.OK_CANCEL_OPTION"),s(".")])])])],-1),K=n("p",null,[s("If you want to add the "),n("code",null,"messageType"),s(" parameter as well, you can do so using the overloaded method below:")],-1),Q=n("div",{class:"language-java ext-java line-numbers-mode"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"showMessageDialog"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Component"),s(" parentComponent"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Object"),s(" message"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"String"),s(" title"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" optionType"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" messageType"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br")])],-1),V=n("p",null,[s("This overloaded method brings up a dialog where the number of choices is determined by the "),n("code",null,"optionType"),s(" parameter, where the "),n("code",null,"messageType"),s(" parameter determines the icon to display.")],-1),q=n("ul",null,[n("li",null,[s("Parameters: "),n("ul",null,[n("li",null,[n("strong",null,"parentComponent"),s(" determines the "),n("code",null,"Frame"),s(" in which the dialog is displayed; if "),n("code",null,"null"),s(", or if the "),n("code",null,"parentComponent"),s(" has no "),n("code",null,"Frame"),s(", a default "),n("code",null,"Frame"),s(" is used.")]),n("li",null,[n("strong",null,"message"),s(" the "),n("code",null,"Object"),s(" to display.")]),n("li",null,[n("strong",null,"title"),s(" the title string for the dialog.")]),n("li",null,[n("strong",null,"optionType"),s(" the type of options available on the dialog: "),n("code",null,"JOptionPane.YES_NO_OPTION"),s(", "),n("code",null,"JOptionPane.YES_NO_CANCEL_OPTION"),s(", or "),n("code",null,"JOptionPane.OK_CANCEL_OPTION"),s(".")]),n("li",null,[n("strong",null,"messageType"),s(" the type of message that is to be displayed: "),n("code",null,"JOptionPane.ERROR_MESSAGE"),s(", "),n("code",null,"JOptionPane.INFORMATION_MESSAGE"),s(", "),n("code",null,"JOptionPane.WARNING_MESSAGE"),s(", "),n("code",null,"JOptionPane.QUESTION_MESSAGE"),s(", or "),n("code",null,"JOptionPane.PLAIN_MESSAGE"),s(".")])])])],-1),H=n("p",null,[n("code",null,"showMessageDialog()"),s(" outputs an integer that corresponds to the user's choice. You can compare the returned integer to the constants from the "),n("code",null,"JOptionPane"),s(": "),n("code",null,"JOptionPane.OK_OPTION"),s(", "),n("code",null,"JOptionPane.YES_OPTION"),s(", "),n("code",null,"JOptionPane.NO_OPTION"),s(", and "),n("code",null,"JOptionPane.CANCEL_OPTION"),s(".")],-1),z=n("p",null,[n("strong",null,"Example:")],-1),X=n("div",{class:"language-java ext-java line-numbers-mode"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"int"),s(" choice "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"JOptionPane"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"showConfirmDialog"),n("span",{class:"token punctuation"},"("),s("myJButton"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Are you sure you want to confirm?"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Confirmation"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"JOptionPane"),n("span",{class:"token punctuation"},"."),s("YES_NO_CANCEL_OPTION"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("choice "),n("span",{class:"token operator"},"=="),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"JOptionPane"),n("span",{class:"token punctuation"},"."),s("YES_OPTION"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// do something when the user clicks yes."),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// ..."),s(`
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br")])],-1),Z=n("h2",{id:"message-types",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#message-types","aria-hidden":"true"},"#"),s(" Message types")],-1),$=n("p",null,[s("For easy reference, refer to the image below for the types of "),n("code",null,"messageType"),s(" that you can use "),n("em",null,"taken from the presentation"),s(".")],-1),nn=n("img",{src:u},null,-1),sn=s("Retrieved from "),en=n("em",null,"JOptionPane Message Dialog Constants.",-1),an=s(" (2019). In K. Sierra & B. Bates (Eds.), Java\u2122 "),tn=n("em",null,"How To Program (Early Objects)",-1),on=s(" (10th ed., p. 552). O'Reilly Media, Inc.: "),ln={href:"https://www.oreilly.com/",target:"_blank",rel:"noopener noreferrer"},cn=s("https://www.oreilly.com/");function un(pn,dn){const e=a("OutboundLink");return t(),o(i,null,[d,r,m,g,h,k,_,b,y,O,v,w,f,P,E,S,j,T,C,J,N,x,I,A,M,D,G,R,F,L,B,Y,U,W,K,Q,V,q,H,z,X,Z,$,nn,n("p",null,[sn,en,an,tn,on,n("a",ln,[cn,l(e)])])],64)}p.render=un;export{p as default};