attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;

uniform sampler2D uSampler2;
uniform float normScale;
uniform float timeFactor;

void main() {
	vec3 offset=vec3(0.0,0.0,0.0);

	vTextureCoord = aTextureCoord;

    float greyFactor = texture2D(uSampler2,vec2(sin(timeFactor * 0.02),sin(timeFactor * 0.02)) + vTextureCoord).r * 0.299 + texture2D(uSampler2,vec2(sin(timeFactor * 0.02),sin(timeFactor * 0.02)) + vTextureCoord).g * 0.587 + texture2D(uSampler2,vec2(sin(timeFactor * 0.02),sin(timeFactor * 0.02)) + vTextureCoord).b * 0.114;
	offset=aVertexNormal * normScale * 0.005 * greyFactor;

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+offset, 1.0);
}
